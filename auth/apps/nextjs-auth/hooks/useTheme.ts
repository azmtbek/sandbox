import { useEffect, useState } from "react";

export const useTheme = () => {
  const [value, setValue] = useState<string | undefined>();
  const [isMount, setMount] = useState(false);
  
  // get default theme if any
  useEffect(() => {
    if (!isMount) {
      const theme = localStorage.getItem('theme');
      if (theme) setValue(JSON.parse(theme));
    }
    setMount(true)
  }, [])

  // set theme
  useEffect(() => {
    if (isMount) {
      if (value != 'os') localStorage.setItem('theme', JSON.stringify(value));
      else localStorage.removeItem('theme')
    }
  }, [value]);

  // add class based on the theme
  useEffect(() => {
    const root = document.documentElement
    const isMediaMatch = () => !("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches

    if (value === "dark" || isMediaMatch()) { root.classList.add("dark"); }
    else { root.classList.remove("dark"); }
    return () => {
    };
  }, [value]);
  
  return [value, setValue] as const;
};