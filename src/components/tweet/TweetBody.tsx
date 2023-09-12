import Image from "next/image";
import { useTweet } from "@/hooks/useTweet";

import { nFormatter } from "@/utils";

export type TweetBodyProps = {
  body?: string;
  image?: string;
  viewsCount?: number;
  publishTime?: string;
  publishDate?: string;
};

const TweetBody = () => {
  const { state } = useTweet();
  const { body, image, viewsCount, publishTime, publishDate }: TweetBodyProps =
    state;
  const formattedViewsCount = nFormatter(viewsCount!);
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[23px]">{body ? body : "Your fake tweet here!"}</div>
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
      <div className="flex items-center gap-1 pb-4 pt-2 text-sm font-normal text-gray-500">
        <span>
          {publishTime ? publishTime : "12:00 PM"}
          {publishDate ? ` · ${publishDate}` : " · Jun 1, 2021"}
        </span>
        {!!viewsCount && (
          <>
            <span>·</span>
            <span>
              <b className="font-bold text-black">{formattedViewsCount}</b>
              {" Views"}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default TweetBody;
