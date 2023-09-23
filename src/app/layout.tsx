import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter as MainFont } from "next/font/google";

import { rootMetadata } from "@/configs/seo";
import { cn } from "@/utils/index";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mainFont = MainFont({
  subsets: ["latin"],
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(mainFont.className, "bg-stone-50 text-slate-800")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
