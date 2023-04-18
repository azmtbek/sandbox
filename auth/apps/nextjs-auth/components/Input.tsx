import React, { InputHTMLAttributes } from "react";
import tw from "utils/tailwind";

export default function Input(
  props: InputHTMLAttributes<
    HTMLInputElement
  >,
) {
  const { className, ...allOther } = props;

  return (
    <input
      {...allOther}
      className={tw(
        "outline-none text-slate-800  p-2",
        "border border-b-2 border-solid border-slate-500 focus:border-b-cyan-300",
        "dark:text-white dark:bg-slate-800 hover:border-b-cyan-300 ",
        "dark:hover:bg-slate-900 dark:focus:bg-slate-900 rounded-lg ",
        className,
      )}
    />
  );
}
