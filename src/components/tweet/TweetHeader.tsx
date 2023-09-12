import { useTweet } from "@/hooks/useTweet";

import UserInfo from "@/components/parts/UserInfo";
import DotsMenu from "@/components/parts/DotsMenu";

export type TweetHeaderProps = {
  avatar?: string;
  name?: string;
  username?: string;
  verified?: boolean;
};

const TweetHeader = () => {
  const { state } = useTweet();
  const { avatar, name, username, verified }: TweetHeaderProps = state;
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
