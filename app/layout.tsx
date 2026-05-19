import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Revolution Fitness Co.",
  description: "Revolution Fitness Co. - Achieve your fitness goals with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full ${manrope.className}`}
    >
      <body className="min-h-full">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
