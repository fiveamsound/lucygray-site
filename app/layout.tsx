import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucy Gray",
  description: "The official home of Lucy Gray — music, merch, shows, and contact.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
