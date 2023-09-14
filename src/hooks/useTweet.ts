import { useContext } from "react";
import { TweetContext } from "@/features/contexts";
import { TweetTheme, Tweet } from "@/types";

export const useTweet = () => {
  const context = useContext(TweetContext);

  if (context === undefined) {
    throw new Error("useTweet must be used within AppProvider");
  }

  const { state, dispatch } = context;

  const { tweet, theme } = state;

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
