import { useEffect, Ref, useState, RefObject, SyntheticEvent } from "react";

export default function useOutsideClick(ref: RefObject<HTMLDivElement>) {
  const [isOutside, setIsOutside] = useState(false)
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref?.current && !ref.current.contains(event.target as HTMLDivElement)) {
        setIsOutside(true)
      }
      if (ref?.current && ref.current.contains(event.target as HTMLDivElement)) {
        setIsOutside(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return [isOutside, setIsOutside] as const
}
