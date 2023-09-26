import React from "react";

import TweetProvider from "@/components/tweet/TweetProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <TweetProvider>{children}</TweetProvider>;
};

export default Providers;
