import React from "react";

import { ImSpinner2 } from "react-icons/im";
import { BiDownload } from "react-icons/bi";

import { cn } from "@/utils";

export interface DownloadButtonProps extends React.ComponentProps<"button"> {
  label: string;
  loadingLabel: string;
  isLoading: boolean;
}

const DownloadButton = (props: DownloadButtonProps) => {
  const { label, loadingLabel, isLoading, className, ...otherProps } = props;
  return (
    <button
      className={cn(
        "flex w-[180px] items-center justify-center rounded-lg px-4 py-2 text-center text-white",
        "bg-[#1d9bf0] hover:bg-[#148ad8]",
        {
          "hover:cursor-pointer": !isLoading,
        },
        className
      )}
      {...otherProps}
      disabled={isLoading}
    >
      {isLoading && (
        <div className="flex items-center gap-2">
          <span className="animate-spin text-xl">
            <ImSpinner2 />
          </span>
          <span className="text-base">{loadingLabel}</span>
        </div>
      )}
      {!isLoading && (
        <div className="flex items-center gap-2">
          <span className="text-xl">
            <BiDownload />
          </span>
          <span className="text-base">{label}</span>
        </div>
      )}
    </button>
  );
};

export default DownloadButton;
