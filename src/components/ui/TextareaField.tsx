import React from "react";
import { cn } from "@/utils";

interface TextareaFieldProps extends React.ComponentProps<"textarea"> {
  label?: string;
  tooltip?: string;
  containerClass?: string;
  labelClass?: string;
  textareaClass?: string;
  tooltipClass?: string;
}

const TextareaField = (props: TextareaFieldProps) => {
  const {
    id,
    label,
    tooltip,
    containerClass,
    labelClass,
    textareaClass,
    tooltipClass,
    className = "",
    ...otherProps
  } = props;
  return (
    <div className={cn("flex w-full flex-col gap-1", containerClass)}>
      {label && (
        <label className={cn("text-base font-medium", labelClass)}>
          {label}
        </label>
      )}
      <textarea
        {...otherProps}
        className={cn("rounded border border-gray-300", textareaClass)}
      ></textarea>
      {tooltip && (
        <span className={cn("ml-1 text-xs text-gray-500", tooltipClass)}>
          {tooltip}
        </span>
      )}
    </div>
  );
};

export default TextareaField;
