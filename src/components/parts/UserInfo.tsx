import Image from "next/image";
import { VerifiedIcon } from "../Icons";
export type UserInfoProps = {
  name?: string;
  username?: string;
  avatar?: string;
  verified?: boolean;
};

const UserInfo = (props: UserInfoProps) => {
  const { avatar, name, username, verified } = props;

  return (
    <div className="flex items-center gap-3">
      <div className="h-12 w-12 rounded-full bg-slate-500">
        {avatar && (
          <Image
            src={avatar}
            alt="avatar"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full"
          />
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="text-[15px] font-bold text-gray-900">
            {name ? name : "Name"}
          </span>
          {verified && <VerifiedIcon />}
        </div>
        <span className="text-sm font-medium text-gray-500">
          {username ? username : "@Username"}
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
