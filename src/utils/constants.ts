import { TweetTheme } from "@/types/tweet";

export const tweetHeaderDefaults = {
  avatar: "/images/default-avatar.png",
  name: "Name",
  username: "Username",
};

export const tweetBodyDefaults = {
  body: "Your fake tweet here!",
  publishTime: "08:00 AM",
  publishDate: "Jan 1, 2023",
};

export const twitterThemes: Record<TweetTheme, string> = {
  light: "text-black",
  dark: "text-white",
  dim: "#15202b",
};

export const twitterThemeOptions = Object.keys(twitterThemes).map(
  (theme, index) => {
    return {
      id: index,
      label: theme.charAt(0).toUpperCase() + theme.slice(1),
      value: theme,
    };
  }
);
