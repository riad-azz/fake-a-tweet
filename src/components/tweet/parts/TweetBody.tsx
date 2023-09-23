import Image from "next/image";
import { useTweet } from "@/hooks/useTweet";

import { nFormatter } from "@/utils";
import { tweetBodyDefaults } from "@/utils/constants";

export interface TweetBodyProps {
  body?: string;
  image?: string;
  viewsCount?: number;
  publishTime?: string;
  publishDate?: string;
}

const TweetBody = () => {
  const { tweet } = useTweet();
  const { body, image, viewsCount, publishTime, publishDate }: TweetBodyProps =
    tweet;

  const formattedViewsCount = nFormatter(viewsCount!);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3">
        <div dir="auto" className="text-[17px] font-normal">
          {body ? body : tweetBodyDefaults.body}
        </div>
        {image && (
          <Image
            src={image}
            alt="image"
            width={0}
            height={0}
            sizes="100%"
            className="max-h-[500px] w-full rounded-xl object-cover"
          />
        )}
      </div>
      <div className="my-4 flex h-[20px] items-center gap-1">
        <time className="text-sm font-normal text-gray-500">
          {publishTime ? publishTime : tweetBodyDefaults.publishTime}
          {publishDate
            ? ` · ${publishDate}`
            : ` · ${tweetBodyDefaults.publishDate}`}
        </time>
        {!!viewsCount && (
          <>
            <span className="text-sm font-normal text-gray-500">·</span>
            <span>
              <span className="text-sm font-semibold">
                {formattedViewsCount}
              </span>
              <span className="text-sm font-normal text-gray-500">
                {` View${viewsCount > 1 ? "s" : ""}`}
              </span>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default TweetBody;
