import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amirhossein goodarzi | Resume cv",
  description: "Amirhossein goodarzi's portfolio - Front-end developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className="antialiased dark">{children}</body>
    </html>
  );
}
