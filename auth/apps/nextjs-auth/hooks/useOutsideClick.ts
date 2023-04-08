import { useEffect, Ref, useState } from "react";


export default function useOutsideClick(ref: Ref<Event | null>) {
  const [isOutside, setIsOutside] = useState(false)
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref?.current && !ref.current.contains(event.target)) {
        setIsOutside(true)
      }
      if (ref?.current && ref.current.contains(event.target)) {
        setIsOutside(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return isOutside
}
