import { db } from "@/lib/db";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  date: z.string().datetime(),
  type: z.enum(["strategy-call", "proposal", "demo"]),
  notes: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { error: "Invalid data", details: parsed.error.errors },
        { status: 400 }
      );
    }

    // Check if time slot is available
    const existing = await db.bookingSession.findFirst({
      where: {
        date: new Date(parsed.data.date),
      },
    });

    if (existing) {
      return Response.json(
        { error: "Time slot already booked" },
        { status: 409 }
      );
    }

    const booking = await db.bookingSession.create({
      data: {
        ...parsed.data,
        date: new Date(parsed.data.date),
      },
    });

    return Response.json({
      success: true,
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const bookings = await db.bookingSession.findMany({
      where: {
        date: {
          gte: new Date(),
        },
      },
      orderBy: {
        date: "asc",
      },
    });

    return Response.json({ success: true, bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
