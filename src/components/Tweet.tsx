"use client";

import { useScreenshot } from "@/hooks/useScreenshot";

import { TweetProps } from "@/types";
import TweetBody from "@/components/TweetBody";
import TweetHeader from "@/components/TweetHeader";
import TweetFooter from "@/components/TweetFooter";

const tweet: TweetProps = {
  avatar: "/avatar.jpg",
  name: "John Doe",
  username: "@johndoe",
  verified: false,
  body: "This is a fake tweet!",
  image: "/bodyImage.jpg",
  publishedTime: "12:00 PM",
  publishedDate: "Jun 1, 2021",
  viewsCount: 124510,
  repostsCount: 8451,
  quotesCount: 6224,
  likesCount: 32000,
  bookmarksCount: 1341,
};

const Tweet = () => {
  const { componentRef, captureScreenshot } = useScreenshot();
  const { avatar, name, username, verified } = tweet;
  const { body, image, publishedTime, publishedDate } = tweet;
  const { viewsCount, repostsCount, quotesCount, likesCount, bookmarksCount } =
    tweet;
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={componentRef}
        className="w-full max-w-lg border-2 border-[#c4cfd6] p-4"
      >
        {/* Tweet header */}
        <TweetHeader
          avatar={avatar}
          name={name}
          username={username}
          verified={verified}
        />
        {/* Tweet body */}
        <TweetBody
          body={body}
          image={image}
          viewsCount={viewsCount}
          publishedTime={publishedTime}
          publishedDate={publishedDate}
        />
        {/* Tweet Footer */}
        <TweetFooter
          repostsCount={repostsCount}
          quotesCount={quotesCount}
          likesCount={likesCount}
          bookmarksCount={bookmarksCount}
        />
      </div>
      <button
        onClick={captureScreenshot}
        className="rounded-lg bg-blue-500 px-4 py-2 text-white"
      >
        Download Fake Tweet
      </button>
    </div>
  );
};

export default Tweet;
