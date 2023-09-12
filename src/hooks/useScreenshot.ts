import { useRef } from "react";
import * as htmlToImage from "html-to-image";

export const useScreenshot = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const downloadScreenshot = (screenshotDataUrl: string) => {
    const link = document.createElement("a");
    link.href = screenshotDataUrl;
    link.download = "fake-a-tweet.png";
    link.click();
  };

  const captureScreenshot = () => {
    if (componentRef.current) {
      htmlToImage
        .toPng(componentRef.current, {
          backgroundColor: "#ffffff",
          quality: 1,
          cacheBust: true,
          includeQueryParams: true,
        })
        .then((dataUrl) => {
          downloadScreenshot(dataUrl);
        });
    }
  };

  return { componentRef, captureScreenshot };
};
