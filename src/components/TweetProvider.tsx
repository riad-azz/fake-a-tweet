import { useReducer } from "react";
import { TweetContext } from "@/features/contexts";
import { tweetReducer, initialState } from "@/features/tweetReducer";

const TweetProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(tweetReducer, initialState);

  return (
    <TweetContext.Provider value={{ state, dispatch }}>
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
