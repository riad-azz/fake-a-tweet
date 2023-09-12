import { TweetState, TweetAction } from "@/types";

export const initialState: TweetState = {
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
  quotesCount: 0,
  likesCount: 0,
  bookmarksCount: 0,
};

export const tweetReducer = (state: TweetState, action: TweetAction) => {
  switch (action.type) {
    case "UPDATE_TWEET":
      return { ...state, ...action.payload };
    case "RESET_TWEET":
      return initialState;
    // Define cases for other properties as needed
    default:
      return state;
  }
};
