import Image from "next/image";

import { useTweet } from "@/hooks/useTweet";

import { BsThreeDots } from "react-icons/bs";
import { VerifiedIcon } from "@/components/Icons";

import { tweetHeaderDefaults } from "@/utils/constants";

export interface TweetHeaderProps {
  avatar?: string;
  name?: string;
  username?: string;
  verified?: boolean;
}

const TweetHeader = () => {
  const { tweet } = useTweet();
  const { avatar, name, username, verified }: TweetHeaderProps = tweet;
  return (
    <div className="mb-4 flex justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full">
          <Image
            src={avatar ? avatar : tweetHeaderDefaults.avatar}
            alt="avatar"
            width={400}
            height={400}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold">
              {name ? name : tweetHeaderDefaults.name}
            </span>
            {verified && <VerifiedIcon />}
          </div>
          <span className="text-sm font-normal text-gray-500">
            @{username ? `${username}` : tweetHeaderDefaults.username}
          </span>
        </div>
      </div>
      <BsThreeDots />
    </div>
  );
};

export default TweetHeader;
