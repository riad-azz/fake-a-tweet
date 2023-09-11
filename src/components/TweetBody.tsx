import Image from "next/image";
import { nFormatter } from "@/utils";

export type TweetBodyProps = {
  body?: string;
  image?: string;
  viewsCount?: number;
  publishedTime?: string;
  publishedDate?: string;
};

const TweetBody = (props: TweetBodyProps) => {
  const { body, image, viewsCount, publishedTime, publishedDate } = props;
  const formattedViewsCount = nFormatter(viewsCount!);
  return (
    <div className="flex flex-col">
      <span className="break-normal text-[23px]">
        {body ?? "Your fake tweet here!"}
      </span>
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
      <div className="my-4 flex items-center gap-1 text-sm font-normal text-gray-500">
        <span>
          {publishedTime ?? "12:00 PM"} · {publishedDate ?? "Jun 1, 2021"}
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
