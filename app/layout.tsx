import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aspire Aesthetics | Beauty & Spa Services",
  description: "Aspire Aesthetics offers premium beauty and spa services in a luxurious setting. Contact us today to book your appointment.",
  icons: {
    icon: '/favicon.svg',
  },
  keywords: ["spa", "beauty", "aesthetics", "treatments", "facial", "body treatments", "beauty therapy"],
  authors: [{ name: "Aspire Aesthetics" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
