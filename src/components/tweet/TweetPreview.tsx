"use client";

import React from "react";
import { useTweet } from "@/hooks/useTweet";
import { useScreenshot } from "@/hooks/useScreenshot";

import TweetBody from "./parts/TweetBody";
import TweetHeader from "./parts/TweetHeader";
import TweetFooter from "./parts/TweetFooter";
import TweetDisclaimer from "./ui/TweetDisclaimer";

import RadioInput from "@/components/ui/RadioInput";
import DownloadButton from "@/components/ui/DownloadButton";

import { TweetTheme } from "@/types/tweet";
import { cn } from "@/utils";
import { twitterThemes, twitterThemeOptions } from "@/utils/constants";

const TweetPreview = () => {
  const { theme, updateTheme, resetTweet } = useTweet();
  const currentTheme = twitterThemes[theme];

  const { componentRef, isCapturing, captureScreenshot } =
    useScreenshot(currentTheme);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = event.target.value as TweetTheme;
    updateTheme(newTheme);
  };

  return (
    <div className="order-1 mx-auto w-full lg:order-2">
      <div
        className={cn(
          "mx-auto flex w-full max-w-2xl flex-col items-center gap-4 rounded border bg-white py-4 shadow-md",
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
          className={cn("w-full border-[1px] p-4", {
            "border-[#eff3f4] bg-white text-black": theme === "light",
            "border-[#2f3336] bg-black text-white": theme === "dark",
            "border-[#2f3336] bg-[#15202b] text-white": theme === "dim",
          })}
        >
          {/* Tweet header */}
          <TweetHeader />
          {/* Tweet body */}
          <TweetBody />
          {/* Tweet Footer */}
          <TweetFooter />
        </div>
        <div className="flex w-full items-center justify-between gap-4 px-2 lg:px-0">
          {/* Tweet use disclaimer */}
          <TweetDisclaimer />
          <div className="flex w-full items-center justify-end gap-4">
            <button
              type="button"
              className={cn(
                "w-fit rounded-lg bg-red-500 px-4 py-2 text-center text-white",
                "hover:cursor-pointer hover:bg-red-600"
              )}
              onClick={resetTweet}
            >
              Reset
            </button>
            <DownloadButton
              label="Download"
              loadingLabel="Processing"
              isLoading={isCapturing}
              onClick={captureScreenshot}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetPreview;
