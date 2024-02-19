import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";


import Providers from "./providers";



export const metadata: Metadata = {
  title: "Digital Design Blog",
  description: "دیجیتال دیزاین بلاگ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
    
      <body>
      <Providers>
      <div className="mx-auto max-w-screen-xl">
        <div className="max-w-screen-2xl m-auto p-10">
        <Navbar />
      {children}
     <Footer />
      </div>
      </div>
      </Providers>
      </body>
      
    </html>
  );
}
