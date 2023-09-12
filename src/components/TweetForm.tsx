import { ChangeEvent } from "react";
import { useTweet } from "@/hooks/useTweet";

import InputField from "@/components/ui/InputField";
import TextareaField from "@/components/ui/TextareaField";

import { cn } from "@/utils";
import { tweetHeaderDefaults, tweetBodyDefaults } from "@/utils/constants";

const TweetForm = () => {
  const { tweet, updateTweet, resetTweet } = useTweet();

  const handleImageChange = (
    field: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          updateTweet({
            [field]: event.target.result,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={cn(
        "flex w-full max-w-xl flex-col rounded border border-gray-100 bg-white p-4 shadow-md",
        "order-2 lg:order-1 lg:max-w-sm"
      )}
    >
      <div className="mb-2 flex flex-col gap-2">
        {/* Header Section */}
        <InputField
          id="avatar"
          type="file"
          accept="image/*"
          label="Profile Picture"
          placeholder="Profile picture"
          InputClass="hidden"
          onChange={(e) => handleImageChange("avatar", e)}
        >
          <label
            htmlFor="avatar"
            className={cn(
              "rounded-lg bg-[#1d9bf0] px-4 py-2 text-center text-white",
              "hover:cursor-pointer hover:bg-[#148ad8]"
            )}
          >
            Upload Profile Picture
          </label>
          {tweet.avatar && (
            <button
              className="w-fit text-left text-sm text-red-600 hover:underline"
              onClick={() => updateTweet({ avatar: "" })}
            >
              Remove Profile Picture
            </button>
          )}
        </InputField>
        <InputField
          type="text"
          label="Name"
          placeholder={tweetHeaderDefaults.name}
          tooltip={`${tweet.name ? tweet.name.length : 0}/50 characters`}
          value={tweet.name}
          onChange={(e) =>
            updateTweet({
              name: e.target.value,
            })
          }
        />
        <InputField
          type="text"
          label="Username"
          placeholder={"@" + tweetHeaderDefaults.username}
          tooltip={`${
            tweet.username ? tweet.username.length : 0
          }/15 characters`}
          value={tweet.username}
          onChange={(e) =>
            updateTweet({
              username: e.target.value,
            })
          }
        />
        <label
          htmlFor="verified"
          className="flex items-center justify-start gap-2 px-1"
        >
          <InputField
            id="verified"
            type="checkbox"
            containerClass="w-fit"
            InputClass="border-gray-600"
            checked={tweet.verified}
            onChange={() => updateTweet({ verified: !tweet.verified })}
          />
          <span className="w-full">Show verified badge</span>
        </label>
      </div>
      {/* Body Section */}
      <div className="flex flex-col gap-4">
        <TextareaField
          dir="auto"
          label="What's happening?"
          placeholder={tweetBodyDefaults.body}
          tooltip={`${tweet.body ? tweet.body.length : 0}/280 characters`}
          value={tweet.body}
          onChange={(e) =>
            updateTweet({
              body: e.target.value,
            })
          }
        />
        <InputField
          id="tweet-image"
          type="file"
          accept="image/*"
          placeholder="Tweet Image"
          label="Add an image"
          containerClass="mb-2"
          labelClass={cn(
            "bg-[#1d9bf0] text-white px-4 py-2 rounded-lg text-center",
            "hover:bg-[#148ad8] hover:cursor-pointer"
          )}
          InputClass="hidden"
          onChange={(e) => handleImageChange("image", e)}
        >
          {tweet.image && (
            <button
              className="w-fit text-left text-sm text-red-600 hover:underline"
              onClick={() => updateTweet({ image: "" })}
            >
              Remove Image
            </button>
          )}
        </InputField>
        <InputField
          type="text"
          label="Publish Time"
          placeholder={tweetBodyDefaults.publishTime}
          tooltip="hh:mm AM/PM format"
          value={tweet.publishTime}
          onChange={(e) =>
            updateTweet({
              publishTime: e.target.value,
            })
          }
        />
        <InputField
          type="text"
          label="Publish Date"
          placeholder={tweetBodyDefaults.publishDate}
          tooltip="mmm dd, yyyy format"
          value={tweet.publishDate}
          onChange={(e) =>
            updateTweet({
              publishDate: e.target.value,
            })
          }
        />
        <InputField
          type="number"
          label="Views Count"
          placeholder="0"
          value={tweet.viewsCount}
          onChange={(e) =>
            updateTweet({
              viewsCount: parseInt(e.target.value),
            })
          }
          min={0}
        />
      </div>
      {/* Stats Section */}
      <div className="mt-4 flex items-center justify-between gap-4">
        <InputField
          type="number"
          label="Replies"
          placeholder="0"
          containerClass="w-1/5"
          labelClass="text-sm"
          value={tweet.repliesCount}
          onChange={(e) =>
            updateTweet({
              repliesCount: parseInt(e.target.value),
            })
          }
          min={0}
        />
        <InputField
          type="number"
          label="Reposts"
          placeholder="0"
          containerClass="w-1/5"
          labelClass="text-sm"
          value={tweet.repostsCount}
          onChange={(e) =>
            updateTweet({
              repostsCount: parseInt(e.target.value),
            })
          }
          min={0}
        />
        <InputField
          type="number"
          label="Likes"
          placeholder="0"
          containerClass="w-1/5"
          labelClass="text-sm"
          value={tweet.likesCount}
          onChange={(e) =>
            updateTweet({
              likesCount: parseInt(e.target.value),
            })
          }
          min={0}
        />
        <InputField
          type="number"
          label="Bookmarks"
          placeholder="0"
          containerClass="w-1/5"
          labelClass="text-sm"
          value={tweet.bookmarksCount}
          onChange={(e) =>
            updateTweet({
              bookmarksCount: parseInt(e.target.value),
            })
          }
          min={0}
        />
      </div>
      <div className="mt-4 w-full">
        <button
          type="button"
          className={cn(
            "w-full rounded-lg bg-[#1d9bf0] px-4 py-2 text-center text-white",
            "hover:cursor-pointer hover:bg-[#148ad8]"
          )}
          onClick={resetTweet}
        >
          Reset All
        </button>
      </div>
      <div />
    </div>
  );
};

export default TweetForm;
