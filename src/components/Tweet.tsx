import { TweetProps } from "@/types";
import TweetBody from "@/components/TweetBody";
import TweetHeader from "./TweetHeader";
import TweetFooter from "./TweetFooter";

const tweet: TweetProps = {
  // avatar: "https://picsum.photos/200",
  // name: "John Doe",
  // username: "@johndoe",
  // verified: false,
  // body: "This is a fake tweet!",
  // image: "https://picsum.photos/500",
  // publishedTime: "12:00 PM",
  // publishedDate: "Jun 1, 2021",
  // viewsCount: 12451,
  // repostsCount: 161060000,
  // quotesCount: 161060000,
  // likesCount: 161060000,
  // bookmarksCount: 161060000,
};

const Tweet = () => {
  // Header
  const { avatar, name, username, verified } = tweet;
  const { body, image, publishedTime, publishedDate } = tweet;
  const { viewsCount, repostsCount, quotesCount, likesCount, bookmarksCount } =
    tweet;
  return (
    <div className="w-full max-w-lg border-2 border-[#c4cfd6] p-4">
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
  );
};

export default Tweet;
