import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter as MainFont } from "next/font/google";

import { mainMetadata } from "@/configs/seo";
import { cn } from "@/utils/index";

const mainFont = MainFont({
  subsets: ["latin"],
});

export const metadata: Metadata = mainMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(mainFont.className, "bg-stone-50 text-slate-800")}>
        {children}
      </body>
    </html>
  );
}
