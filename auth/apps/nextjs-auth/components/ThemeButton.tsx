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
        className="px-4 py-1 text-lg border rounded-full w-18 
         bg-emerald-700 text-white "
      >
        {options.map((val) => {
          return (
            <option key={val} value={val}>
              {val}
            </option>
          );
        })}
      </select>
    </div>
  );
}
