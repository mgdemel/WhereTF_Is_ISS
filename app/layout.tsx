import "./globals.css";
import type React from "react";

export const metadata = {
  title: "ISS Tracker",
  description: "Track the International Space Station in real-time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
