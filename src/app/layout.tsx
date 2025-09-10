import type { Metadata } from "next";
import  Navbar  from "@/app/components/Navbar";
import  Footer  from "@/app/components/Footer";
import "./globals.css";




export const metadata: Metadata = {
  title: "My portfolio ",
  description: "created by next.js ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
