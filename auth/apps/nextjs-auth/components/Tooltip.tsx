import React, { ReactPropTypes } from "react";
import tw from "utils/tailwind";

type TooltipProps = {
  text: string;
  show?: boolean;
};

export default function Tooltip(props: TooltipProps) {
  const { text, show } = props;
  return (
    <div className="absolute top-0 left-0 w-full h-full"> 
      <span
        className={tw(
          show ? "" : "group-hover:inline-block",
          "absolute z-10 hidden opacity-95 duration-500",
          "top-[120%] left-1/2 w-16 -ml-8 text-sm",
          "rounded-lg p-1 bg-slate-200 dark:bg-slate-600",
        )}
      >
        {text}
      </span>
    </div>
  );
}
