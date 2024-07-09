

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/components/provider";
import Navbar from "@/components/Navbar";
import "@/app/globals.css"
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job finder",
  description: "find your dream job here",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <Navbar />
        <Providers>{children}</Providers>
        <Toaster />
      </body>


    </html>
  );
}
