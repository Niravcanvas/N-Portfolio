import type { Metadata } from "next";
import { Azeret_Mono } from "next/font/google";
import "./globals.css";

const azeretMono = Azeret_Mono({ 
  subsets: ["latin"],
  variable: "--font-azeret-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nirav Thakur | Portfolio",
  description: "Portfolio of Nirav Thakur, a Frontend Developer & UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${azeretMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}