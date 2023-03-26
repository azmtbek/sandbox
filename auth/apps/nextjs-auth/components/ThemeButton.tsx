"use client";
import React, { ChangeEvent } from "react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeButton() {
  const [theme, setTheme] = useTheme();

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setTheme(() => event.target.value);
  };
  const options = ["light", "dark", "os"];
  return (
    <div>
      <select
        value={theme || "os"}
        onChange={onChangeHandler}
        className="px-4 py-2 border rounded-full w-24 text-black bg-white dark:text-white dark:bg-black"
      >
        {options.map((val) => {
          return <option key={val}>{val}</option>;
        })}
      </select>
      <p>{JSON.stringify(theme)}</p>
    </div>
  );
}
