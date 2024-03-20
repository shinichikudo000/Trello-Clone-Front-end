import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manage Your Team's Project From Anywhere | Trello",
  description: "trello.com",
  icons: {
    icon: './trello_logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} data-accordion="close">
        {children}
      </body>
    </html>
  );
}
