import { useTweet } from "@/hooks/useTweet";

import {
  CommentIcon,
  RepostIcon,
  LikeIcon,
  BookmarkIcon,
  ShareIcon,
} from "@/components/Icons";
import TweetStat from "@/components/tweet/ui/TweetStat";

import { cn } from "@/utils";

export interface TweetFooterProps {
  repliesCount?: number;
  repostsCount?: number;
  likesCount?: number;
  bookmarksCount?: number;
}

const TweetFooter = () => {
  const { tweet, theme } = useTweet();
  const {
    repliesCount,
    repostsCount,
    likesCount,
    bookmarksCount,
  }: TweetFooterProps = tweet;

  return (
    <div>
      <div
        className={cn(
          "flex h-[48px] items-center justify-between border-b border-t px-1",
          {
            "border-b-[#eff3f4] border-t-[#eff3f4]": theme === "light",
            "border-b-[#2f3336] border-t-[#2f3336]": theme !== "light",
          }
        )}
      >
        <TweetStat icon={<CommentIcon />} count={repliesCount} />
        <TweetStat icon={<RepostIcon />} count={repostsCount} />
        <TweetStat icon={<LikeIcon />} count={likesCount} />
        <TweetStat icon={<BookmarkIcon />} count={bookmarksCount} />
        <ShareIcon />
      </div>
    </div>
  );
};

export default TweetFooter;
