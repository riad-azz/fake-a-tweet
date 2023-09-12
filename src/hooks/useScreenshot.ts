import { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";

export const useScreenshot = (backgroundColor?: string) => {
  const [isCapturing, setIsCapturing] = useState(false);
  const componentRef = useRef<HTMLDivElement | null>(null);

  const downloadScreenshot = (screenshotDataUrl: string) => {
    const link = document.createElement("a");
    link.href = screenshotDataUrl;
    link.download = "fake-a-tweet.png";
    link.click();
    setIsCapturing(false);
  };

  const captureScreenshot = () => {
    if (componentRef.current) {
      setIsCapturing(true);
      htmlToImage
        .toPng(componentRef.current, {
          backgroundColor,
          quality: 1,
          cacheBust: true,
          includeQueryParams: true,
          pixelRatio: 2,
        })
        .then((dataUrl) => {
          downloadScreenshot(dataUrl);
        });
    }
  };

  return { isCapturing, componentRef, captureScreenshot };
};
