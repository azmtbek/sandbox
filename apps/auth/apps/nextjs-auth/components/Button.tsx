import React, { ButtonHTMLAttributes } from "react";
import tw from "utils/tailwind";

export default function Button(
  props: ButtonHTMLAttributes<
    HTMLButtonElement
  >,
) {
  const { children, className, ...allOther } = props;
  return (
    <button
      {...allOther}
      className={tw(
        "text-center cursor-pointer group",
        "border border-solid  border-slate-400 py-2 relative after:absolute",
        "focus:bg-slate-900 duration-500 ease-in-out uppercase ",
        "after:top-0 after:right-full dark:after:bg-white after:z-10 after:w-full",
        "after:h-full overflow-hidden hover:after:translate-x-full after:duration-300",
        "hover:text-white focus:outline-none rounded-lg",
        "focus:after:translate-x-full text-slate-800 bg-white dark:text-white",
        "dark:focus:text-slate-800 dark:hover:text-slate-800 after:bg-slate-800",
        "focus:text-white",
        className,
      )}
    >
      {children}
    </button>
  );
}
