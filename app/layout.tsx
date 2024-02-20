import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";


import ThemeProviders from "../app/providers/ThemeProviders";
import AuthProvider from "./providers/AuthProvider";



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
        <AuthProvider>
      <ThemeProviders>
      <div className="mx-auto max-w-screen-xl">
        <div className="max-w-screen-2xl m-auto p-10">
        <Navbar />
      {children}
     <Footer />
      </div>
      </div>
      </ThemeProviders>
      </AuthProvider>
      </body>
      
    </html>
  );
}
