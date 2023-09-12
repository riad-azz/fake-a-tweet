"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TweetForm from "@/components/TweetForm";
import TweetPreview from "@/components/TweetPreview";
import AppProvider from "@/components/Providers";

import { cn } from "@/utils";

export default function Home() {
  return (
    <AppProvider>
      <Header />
      <main className="flex flex-col">
        <div
          className={cn(
            "flex flex-col items-center gap-4 py-4",
            "lg:flex-row lg:items-start lg:justify-around lg:px-4"
          )}
        >
          <TweetForm />
          <TweetPreview />
        </div>
      </main>
      <Footer />
    </AppProvider>
  );
}
