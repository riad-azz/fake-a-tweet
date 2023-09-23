import { nFormatter } from "@/utils";

export interface TweetStatProps {
  icon: React.ReactElement;
  count?: number;
}

const TweetStat = (props: TweetStatProps) => {
  const { icon, count } = props;
  const formattedStat = nFormatter(count);
  return (
    <div className="flex items-center gap-3 text-sm text-gray-500">
      {icon}
      {!!formattedStat && <span>{formattedStat}</span>}
    </div>
  );
};

export default TweetStat;
