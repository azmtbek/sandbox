import React, {
  ChangeEvent,
  ChangeEventHandler,
  EventHandler,
  useEffect,
  useState,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
type Theme = "os" | "dark" | "light";
export default function ThemeButton() {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", 'os');

  // if (
  //   localStorage.theme === "dark" ||
  //   (!("theme" in localStorage) &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches)
  // ) {
  //   document.documentElement.classList.add("dark");
  // } else {
  //   document.documentElement.classList.remove("dark");
  // }
  useEffect(() => {
    if (
      theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => {
    };
  }, [theme]);

  // Whenever the user explicitly chooses light mode
  // localStorage.theme = "light";

  // Whenever the user explicitly chooses dark mode
  // localStorage.theme = "dark";

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem("theme");
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setTheme(() => event.target.value as Theme);
  };
  const options = ["light", "dark", "os"];
  return (
    <div>
      <select
        onChange={onChangeHandler}
        className="dark:text-white dark:bg-black"
      >
        <option disabled>Please select an option.</option>
        {options.map((val) => {
          return <option key={val}>{val}</option>;
        })}
      </select>
      <p>{JSON.stringify(theme)}</p>
    </div>
  );
}
