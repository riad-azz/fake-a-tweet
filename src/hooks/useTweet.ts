import { useContext } from "react";
import { AppContext } from "@/features/contexts";
import { TweetState, TweetTheme, Tweet } from "@/types";

export const useTweet = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useTweet must be used within a AppProvider");
  }
  const {
    tweet: {
      state: { tweet, theme },
      dispatch,
    },
  } = context;

  const updateTweet = (newTweet: Partial<Tweet>) => {
    dispatch({ type: "UPDATE_TWEET", payload: newTweet });
  };

  const updateTheme = (newTheme: TweetTheme) => {
    dispatch({ type: "UPDATE_TWEET_THEME", payload: newTheme });
  };

  const resetTweet = () => {
    dispatch({ type: "RESET_TWEET", payload: null });
  };

  return { tweet, theme, updateTweet, updateTheme, resetTweet };
};
