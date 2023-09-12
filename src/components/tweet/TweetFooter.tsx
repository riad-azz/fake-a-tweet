import { useTweet } from "@/hooks/useTweet";
import TweetStat from "@/components/parts/TweetStat";
import {
  CommentIcon,
  RepostIcon,
  LikeIcon,
  BookmarkIcon,
  ShareIcon,
} from "@/components/Icons";

export type TweetFooterProps = {
  repostsCount?: number;
  quotesCount?: number;
  likesCount?: number;
  bookmarksCount?: number;
};

const TweetFooter = () => {
  const { state } = useTweet();
  const {
    repostsCount,
    quotesCount,
    likesCount,
    bookmarksCount,
  }: TweetFooterProps = state;
  const showStats =
    !!repostsCount || !!quotesCount || !!likesCount || !!bookmarksCount;
  return (
    <div>
      {showStats && (
        <div className="flex flex-wrap items-center gap-4 border-t py-4">
          {!!repostsCount && (
            <TweetStat statName="Reposts" statCount={repostsCount} />
          )}
          {!!quotesCount && (
            <TweetStat statName="Quotes" statCount={quotesCount} />
          )}
          {!!likesCount && (
            <TweetStat statName="Likes" statCount={likesCount} />
          )}
          {!!bookmarksCount && (
            <div className="w-full border-t pt-4 sm:w-fit sm:border-0 sm:pt-0">
              <TweetStat statName="Bookmarks" statCount={bookmarksCount} />
            </div>
          )}
        </div>
      )}
      <div className="flex items-center justify-between border-t pt-4">
        <CommentIcon />
        <RepostIcon />
        <LikeIcon />
        <BookmarkIcon />
        <ShareIcon />
      </div>
    </div>
  );
};

export default TweetFooter;
