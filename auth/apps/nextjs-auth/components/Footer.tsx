import React from "react";
import tw from "utils/tailwind";

const animation =
  "text-3xl cursor-pointer hover:opacity-80 duration-300 hover:text-4xl";

export default function Footer() {
  return (
    <div className="flex justify-center items-center p-4 gap-4">
      <i className={tw("fa-brands fa-github", animation)}></i>
      <i className={tw("fa-brands fa-linkedin", animation)}></i>
      <i className={tw("fa-brands fa-twitter", animation)}></i>
    </div>
  );
}
