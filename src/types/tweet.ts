export type TweetTheme = "light" | "dark" | "dim";

export type Tweet = {
  avatar?: string;
  name?: string;
  username?: string;
  verified?: boolean;
  body?: string;
  image?: string;
  publishTime?: string; // hh:mm AM/PM
  publishDate?: string; // mmm dd, yyyy
  viewsCount?: number;
  repliesCount?: number;
  repostsCount?: number;
  likesCount?: number;
  bookmarksCount?: number;
};

export type TweetState = {
  tweet: Tweet;
  theme: TweetTheme;
};

export type TweetAction =
  | { type: "UPDATE_TWEET"; payload: { [field: string]: any } }
  | { type: "UPDATE_TWEET_THEME"; payload: TweetTheme }
  | { type: "RESET_TWEET" };
