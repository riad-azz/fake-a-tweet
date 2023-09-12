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
    <div className="flex flex-col gap-2">
      <div dir="auto" className="text-[23px]">
        {body ? body : tweetBodyDefaults.body}
      </div>
      <div>
        {image && (
          <Image
            src={image}
            alt="image"
            width={0}
            height={0}
            sizes="100%"
            className="max-h-[500px] w-full object-cover"
          />
        )}
      </div>
      <div className="flex items-center gap-1 pb-4 pt-2">
        <span className="text-sm font-normal text-gray-500">
          {publishTime ? publishTime : tweetBodyDefaults.publishTime}
          {publishDate
            ? ` · ${publishDate}`
            : ` · ${tweetBodyDefaults.publishDate}`}
        </span>
        {!!viewsCount && (
          <>
            <span className="text-sm font-normal text-gray-400">·</span>
            <span>
              <b className="font-semibold">{formattedViewsCount}</b>
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
