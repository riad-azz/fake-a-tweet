import { useReducer, ReactNode } from "react";
import { AppContext } from "@/features/contexts";
import { tweetReducer, initTweetState } from "@/features/tweetReducer";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(tweetReducer, initTweetState);

  return (
    <AppContext.Provider
      value={{
        tweet: { state, dispatch },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
