import { useEffect, useState } from "react";

// function getStorageValue<T>(key: string, defaultValue: T) {
//   let saved: T = defaultValue
//   let initial
//   useEffect(() => {
//     saved = localStorage.getItem(key);
//     initial = saved !== null ? JSON.parse(saved) 
//   }, [key]);


//   // const initial = saved !== null ? JSON.parse(saved) : defaultValue;
//   return initial;
// }

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(defaultValue);
  useEffect(() => {
    const saved = localStorage.getItem(key) as T;
    if (saved !== null) setValue(() => saved)
  }, []);

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};