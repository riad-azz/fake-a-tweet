export type TweetState = {
  avatar?: string;
  name?: string;
  username?: string;
  verified?: boolean;
  body?: string;
  image?: string;
  publishTime?: string; // hh:mm AM/PM
  publishDate?: string; // mmm dd, yyyy
  viewsCount?: number;
  repostsCount?: number;
  quotesCount?: number;
  likesCount?: number;
  bookmarksCount?: number;
};

export type TweetAction =
  | { type: "UPDATE_TWEET"; payload: { [field: string]: any } }
  | { type: "RESET_TWEET"; payload: null };
