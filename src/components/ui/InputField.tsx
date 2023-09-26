import React from "react";

import { cn } from "@/utils";

interface InputFieldProps extends React.ComponentProps<"input"> {
  label?: string;
  tooltip?: string;
  containerClass?: string;
  labelClass?: string;
  InputClass?: string;
  tooltipClass?: string;
  children?: React.ReactNode;
}

const InputField = (props: InputFieldProps) => {
  const {
    id,
    label,
    tooltip,
    containerClass,
    labelClass,
    InputClass,
    tooltipClass,
    className = "",
    children,
    ...otherProps
  } = props;
  return (
    <div className={cn("flex w-full flex-col gap-1", containerClass)}>
      {label && (
        <label htmlFor={id} className={cn("text-base font-medium", labelClass)}>
          {label}
        </label>
      )}
      <input
        id={id}
        {...otherProps}
        className={cn("rounded border border-gray-300", InputClass)}
      />
      {children}
      {tooltip && (
        <span className={cn("ml-1 text-xs text-gray-500", tooltipClass)}>
          {tooltip}
        </span>
      )}
    </div>
  );
};

export default InputField;
