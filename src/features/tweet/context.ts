import { TweetAction, TweetState } from "@/types/tweet";
import { createContext, Dispatch } from "react";

export const TweetContext = createContext<
  | {
      state: TweetState;
      dispatch: Dispatch<TweetAction>;
    }
  | undefined
>(undefined);
