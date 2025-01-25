import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kohinoor nimes",
  description: "where I share my thoughts and ideas, and sometimes code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full bg-slate-100`}>
        <div className=" flex h-screen w-full">
          <div className=" py-8 hidden  md:flex flex-col justify-between items-center md:w-[80px] 2xl:w-[320px]">
            <Sidebar />
          </div>
          <div className="h-screen w-full rounded-2xl overflow-y-auto p-4 m-2 bg-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
