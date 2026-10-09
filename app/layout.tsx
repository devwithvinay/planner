import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daymark — 90-Day Job Readiness",
  description: "Your personal 90-day plan for DSA, aptitude, development, AI, interviews, and applications.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}