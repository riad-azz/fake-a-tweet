import { ReactNode } from "react";

import TweetProvider from "@/components/tweet/TweetProvider";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return <TweetProvider>{children}</TweetProvider>;
};

export default AppProvider;
