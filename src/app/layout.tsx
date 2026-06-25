import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VEGAAI | AI-Powered Business Intelligence & Automation",
  description: "Transform complex workflows into intelligent systems through AI automation, enterprise websites, business dashboards, and digital transformation services.",
  viewport: "width=device-width, initial-scale=1",
  keywords: "AI automation, business intelligence, digital transformation, enterprise solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">{children}</body>
    </html>
  );
}
