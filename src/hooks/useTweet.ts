import { useContext } from "react";
import { TweetContext } from "@/features/contexts";
import { TweetState } from "@/types";

export const useTweet = () => {
  const context = useContext(TweetContext);
  if (context === undefined) {
    throw new Error("useTweet must be used within a TweetProvider");
  }
  const { state, dispatch } = context;

  const updateTweet = (newTweet: Partial<TweetState>) => {
    dispatch({ type: "UPDATE_TWEET", payload: newTweet });
  };

  const resetTweet = () => {
    dispatch({ type: "RESET_TWEET", payload: null });
  };

  return { state, updateTweet, resetTweet };
};
