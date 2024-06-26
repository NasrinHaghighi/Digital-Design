import type { Metadata } from "next";

import "./globals.css";



import ThemeProviders from "./providers/ThemeProviders";
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
      <div className="lg:mx-auto  max-w-screen-xl ">
        <div className="max-w-screen-2xl lg:m-auto md:p-10 xs:overflow-x-hidden mx-3 ">
      
      {children}
    
      </div>
      </div>
      </ThemeProviders>
      </AuthProvider>
      </body>
      
    </html>
  );
}
