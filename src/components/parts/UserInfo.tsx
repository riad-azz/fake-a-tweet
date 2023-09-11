import Image from "next/image";

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
            className="rounded-full"
          />
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="text-[15px] font-bold text-gray-900">
            {name ?? "Name"}
          </span>
          {verified && (
            <Image
              src={"/verified.svg"}
              width={20}
              height={20}
              alt="verified"
              className="text-blue-600"
            />
          )}
        </div>
        <span className="text-sm font-medium text-gray-500">
          {username ?? "@Username"}
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
