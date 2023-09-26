import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter as RootFont } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

import { cn } from "@/utils/index";
import { rootMetadata } from "@/configs/seo";

const rootFont = RootFont({
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
      <body className={cn(rootFont.className, "bg-stone-50 text-slate-800")}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
