import TweetStat from "@/components/parts/TweetStat";

export type TweetFooterProps = {
  repostsCount?: number;
  quotesCount?: number;
  likesCount?: number;
  bookmarksCount?: number;
};

const TweetFooter = (props: TweetFooterProps) => {
  const { repostsCount, quotesCount, likesCount, bookmarksCount } = props;
  if (!repostsCount && !quotesCount && !likesCount && !bookmarksCount)
    return null;
  return (
    <div className="flex flex-wrap items-center gap-4 border-b border-t py-4">
      {!!repostsCount && (
        <TweetStat statName="Reposts" statCount={repostsCount} />
      )}
      {!!quotesCount && <TweetStat statName="Quotes" statCount={quotesCount} />}
      {!!likesCount && <TweetStat statName="Likes" statCount={likesCount} />}
      <div className="w-full border-t pt-4 sm:w-fit sm:border-0 sm:pt-0">
        {!!bookmarksCount && (
          <TweetStat statName="Bookmarks" statCount={bookmarksCount} />
        )}
      </div>
    </div>
  );
};

export default TweetFooter;
