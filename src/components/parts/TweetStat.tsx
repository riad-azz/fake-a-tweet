import { nFormatter } from "@/utils";

export type TweetStatProps = {
  statName: string;
  statCount: number;
};

const TweetStat = (props: TweetStatProps) => {
  const { statName, statCount } = props;
  const formattedStat = nFormatter(statCount);
  return (
    <>
      <span className="text-sm text-gray-500">
        <b className="font-bold text-black">{formattedStat}</b>
        {` ${statName}`}
      </span>
    </>
  );
};

export default TweetStat;
