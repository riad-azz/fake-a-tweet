import { useReducer, ReactNode } from "react";
import { TweetContext } from "@/features/contexts";
import { tweetReducer, initTweetState } from "@/features/tweetReducer";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(tweetReducer, initTweetState);
  return (
    <TweetContext.Provider value={{ state, dispatch }}>
      {children}
    </TweetContext.Provider>
  );
};

export default AppProvider;
