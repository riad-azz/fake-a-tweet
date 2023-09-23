import { Tweet, TweetTheme, TweetState, TweetAction } from "@/types/tweet";

export const initTweet: Tweet = {
  avatar: "",
  name: "",
  username: "",
  verified: false,
  body: "",
  image: "",
  publishTime: "",
  publishDate: "",
  viewsCount: 0,
  repostsCount: 0,
  repliesCount: 0,
  likesCount: 0,
  bookmarksCount: 0,
};

export const initTweetTheme: TweetTheme = "light";

export const initTweetState: TweetState = {
  tweet: initTweet,
  theme: initTweetTheme,
};

export const tweetReducer = (state: TweetState, action: TweetAction) => {
  switch (action.type) {
    case "UPDATE_TWEET":
      return { ...state, tweet: { ...state.tweet, ...action.payload } };
    case "UPDATE_TWEET_THEME":
      return { ...state, theme: action.payload };
    case "RESET_TWEET":
      return initTweetState;
    default:
      return state;
  }
};
