import { useContext } from "react";

import { TweetTheme, Tweet } from "@/types/tweet";
import { TweetContext } from "@/features/tweet/context";

export const useTweet = () => {
  const context = useContext(TweetContext);

  if (context === undefined) {
    throw new Error("useTweet must be used within TweetProvider");
  }

  const {
    state: { tweet, theme },
    dispatch,
  } = context;

  const updateTweet = (newTweet: Partial<Tweet>) => {
    dispatch({ type: "UPDATE_TWEET", payload: newTweet });
  };

  const updateTheme = (newTheme: TweetTheme) => {
    dispatch({ type: "UPDATE_TWEET_THEME", payload: newTheme });
  };

  const resetTweet = () => {
    dispatch({ type: "RESET_TWEET" });
  };

  return { tweet, theme, updateTweet, updateTheme, resetTweet };
};
