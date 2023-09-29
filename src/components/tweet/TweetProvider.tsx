"use client";

import React from "react";

import { TweetContext } from "@/features/tweet/context";
import { tweetReducer, initTweetState } from "@/features/tweet/reducer";

const TweetProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(tweetReducer, initTweetState);

  return (
    <TweetContext.Provider value={{ state, dispatch }}>
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
