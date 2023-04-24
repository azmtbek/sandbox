"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import tw from "utils/tailwind";
import useOutsideClick from "@/hooks/useOutsideClick";

const options = [
  {
    key: "light",
    val: <i className="fa-solid fa-sun"></i>,
  },
  {
    key: "dark",
    val: <i className="fa-solid fa-moon"></i>,
  },
  {
    key: "os",
    val: <i className="fa-solid fa-computer"></i>,
  },
];

export default function ThemeButton() {
  const [theme, setTheme] = useTheme();
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setTheme(() => event.target.value);
  };

  return (
    <div>
      {
        /* <select
        value={theme || "os"}
        onChange={onChangeHandler}
        className="px-4 py-1 text-lg border rounded-full w-18
          bg-emerald-700 text-white"
      >
        {options.map((op) => {
          return (
            <option key={op.key} value={op.key}>
              {op.key}
            </option>
          );
        })}
      </select> */
      }
      <MySelect value={theme} onClick={(a: string) => a && setTheme(a)} />
    </div>
  );
}

type SelectProps = {
  value?: string;
  onChange?: () => void;
  onClick: (key: string) => void;
};

const MySelect = (props: SelectProps) => {
  const [isShowOn, setIsShowOn] = useState(false);
  const handleClick = (key: string) => {
    props.onClick(key);
    setIsShowOn(false);
  };

  const wrapperRef = useRef(null);
  const [isClickOutside, setIsClickOutside] = useOutsideClick(wrapperRef);

  useEffect(() => {
    if (isClickOutside && isShowOn) setIsShowOn(false);
  }, [isClickOutside, isShowOn]);
  return (
    <div className="relative w-10 text-center">
      <div
        className="rounded-xl p-1 bg-emerald-700 dark:bg-slate-800"
        onClick={() => {
          setIsShowOn(true);
          setIsClickOutside(false);
        }}
      >
        {options.find((a) => a.key == (props.value || "os"))?.val}
      </div>
      <div
        ref={wrapperRef}
        className={tw(
          "flex flex-col  text-lg absolute top-full left-0",
          "bg-slate-800 rounded-lg py-1 mt-2 border border-slate-600",
          "justify-center items-center divide-y divide-solid w-full",
          isShowOn ? "" : "hidden",
        )}
      >
        {options.map((op) => {
          return (
            <span
              className={tw(
                "w-full",
                op.key == props.value && "bg-slate-600",
              )}
              key={op.key}
              onClick={() => handleClick(op.key)}
            >
              {op.val}
            </span>
          );
        })}
      </div>
    </div>
  );
};
