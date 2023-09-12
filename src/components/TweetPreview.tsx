"use client";
import { useScreenshot } from "@/hooks/useScreenshot";

import TweetBody from "@/components/tweet/TweetBody";
import TweetHeader from "@/components/tweet/TweetHeader";
import TweetFooter from "@/components/tweet/TweetFooter";

import { cn } from "@/utils";

const TweetPreview = () => {
  const { componentRef, captureScreenshot } = useScreenshot();
  return (
    <div className="order-1 mx-auto w-full lg:order-2">
      <div
        className={cn(
          "mx-auto flex w-full max-w-xl flex-col items-center gap-4 rounded border border-gray-100 bg-white py-4 shadow-md",
          "lg:px-4"
        )}
      >
        <h2 className="w-full text-center text-2xl font-bold">Tweet Preview</h2>
        <div
          ref={componentRef}
          className="w-full border border-[#c4cfd6] bg-white p-4"
        >
          {/* Tweet header */}
          <TweetHeader />
          {/* Tweet body */}
          <TweetBody />
          {/* Tweet Footer */}
          <TweetFooter />
        </div>
        <button
          onClick={captureScreenshot}
          className="rounded-lg bg-[#1d9bf0] px-4 py-2 text-center text-white hover:cursor-pointer hover:bg-[#148ad8]"
        >
          Download Fake Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetPreview;
