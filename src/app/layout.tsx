import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { mainMetadata } from "@/configs/seo";
import { cn } from "@/utils/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = mainMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-stone-50 text-slate-800")}>
        {children}
      </body>
    </html>
  );
}
