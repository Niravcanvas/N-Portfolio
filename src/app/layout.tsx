import type { Metadata } from "next";
import "./globals.css";
import { helvetica } from "./fonts";
import { rootMetadata } from "@/lib/seo";

export const metadata: Metadata = rootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${helvetica.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
