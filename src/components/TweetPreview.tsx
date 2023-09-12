"use client";
import { ChangeEvent } from "react";
import { useTweet } from "@/hooks/useTweet";
import { useScreenshot } from "@/hooks/useScreenshot";

import RadioInput from "@/components/ui/RadioInput";
import TweetBody from "@/components/tweet/TweetBody";
import TweetHeader from "@/components/tweet/TweetHeader";
import TweetFooter from "@/components/tweet/TweetFooter";

import { TweetTheme } from "@/types";
import { cn } from "@/utils";
import { twitterThemeOptions } from "@/utils/constants";

const TweetPreview = () => {
  const { theme, updateTheme } = useTweet();
  const { componentRef, captureScreenshot } = useScreenshot();

  const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTheme = event.target.value as TweetTheme;
    updateTheme(newTheme);
  };

  return (
    <div className="order-1 mx-auto w-full lg:order-2">
      <div
        className={cn(
          "mx-auto flex w-full max-w-2xl flex-col items-center gap-4 rounded border border-gray-100 bg-white py-4 shadow-md",
          "lg:px-4"
        )}
      >
        <h2 className="w-full text-center text-2xl font-bold">Tweet Preview</h2>
        <div className="flex w-full gap-4 px-2 lg:px-0">
          <div className="text-base font-medium">Tweet Theme :</div>
          <RadioInput
            selected={theme}
            options={twitterThemeOptions}
            onChange={handleThemeChange}
            className="w-min gap-4"
          />
        </div>
        <div
          ref={componentRef}
          className={cn("w-full border border-[#c4cfd6] p-4", {
            "bg-white text-black": theme === "light",
            "bg-black text-white ": theme === "dark",
            "bg-[#15202b] text-white": theme === "dim",
          })}
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
