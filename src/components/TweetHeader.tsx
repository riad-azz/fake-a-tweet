import React from "react";
import UserInfo from "@/components/parts/UserInfo";
import DotsMenu from "@/components/parts/DotsMenu";

export type TweetHeaderProps = {
  avatar?: string;
  name?: string;
  username?: string;
  verified?: boolean;
};

const TweetHeader = (props: TweetHeaderProps) => {
  const { avatar, name, username, verified } = props;

  return (
    <div className="mb-4 flex justify-between">
      <UserInfo
        avatar={avatar}
        name={name}
        username={username}
        verified={verified}
      />
      <DotsMenu />
    </div>
  );
};

export default TweetHeader;
