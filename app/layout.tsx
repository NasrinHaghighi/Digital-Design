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
      <div className="mx-auto max-w-screen-xl">
        <div className="max-w-screen-2xl m-auto p-10">
      
      {children}
    
      </div>
      </div>
      </ThemeProviders>
      </AuthProvider>
      </body>
      
    </html>
  );
}
