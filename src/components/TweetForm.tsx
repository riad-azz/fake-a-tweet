import { useTweet } from "@/hooks/useTweet";

import InputField from "@/components/ui/InputField";
import TextareaField from "@/components/ui/TextareaField";

import { cn } from "@/utils";

const TweetForm = () => {
  const { state, updateTweet, resetTweet } = useTweet();
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
          label="Upload Profile Picture"
          placeholder="Profile picture"
          containerClass="mb-2"
          labelClass={cn(
            "bg-[#1d9bf0] text-white px-4 py-2 rounded-lg text-center",
            "hover:bg-[#148ad8] hover:cursor-pointer"
          )}
          InputClass="hidden"
        />
        <InputField
          type="text"
          label="Name"
          placeholder="Name"
          tooltip="0/50 characters"
          value={state.name}
          onChange={(e) =>
            updateTweet({
              name: e.target.value,
            })
          }
        />
        <InputField
          type="text"
          label="Username"
          placeholder="@Username"
          tooltip="0/15 characters"
        />
        <label
          htmlFor="verified"
          className="flex items-center justify-start gap-2 px-1"
        >
          <InputField
            id="verified"
            type="checkbox"
            placeholder="@Username"
            containerClass="w-fit"
            InputClass="border-gray-600"
          />
          <span className="w-full">Show verified badge</span>
        </label>
      </div>
      {/* Body Section */}
      <div className="flex flex-col gap-4">
        <TextareaField
          label="What's happening?"
          placeholder="Your fake tweet here!"
          tooltip="0/280 characters"
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
        />
        <InputField
          type="text"
          label="Publish Time"
          placeholder="12:00 PM"
          tooltip="hh:mm AM/PM format"
        />
        <InputField
          type="text"
          label="Publish Date"
          placeholder="Jun 1, 2021"
          tooltip="mmm dd, yyyy format"
        />
      </div>
      {/* Stats Section */}
      <div className="mt-4 flex items-center justify-between gap-4">
        <InputField
          type="number"
          label="Reposts"
          placeholder="0"
          containerClass="w-1/5"
          labelClass="text-sm"
          min={0}
        />
        <InputField
          type="number"
          label="Quotes"
          placeholder="0"
          containerClass="w-1/5"
          labelClass="text-sm"
          min={0}
        />
        <InputField
          type="number"
          label="Likes"
          placeholder="0"
          containerClass="w-1/5"
          labelClass="text-sm"
          min={0}
        />
        <InputField
          type="number"
          label="Bookmarks"
          placeholder="0"
          containerClass="w-1/5"
          labelClass="text-sm"
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
