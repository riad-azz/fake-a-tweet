import { TweetAction, TweetState } from "@/types";
import { createContext, Dispatch } from "react";

export const AppContext = createContext<
  | {
      tweet: { state: TweetState; dispatch: Dispatch<TweetAction> };
    }
  | undefined
>(undefined);
