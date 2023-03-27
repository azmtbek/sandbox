import React from "react";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <div className="flex w-full justify-between px-10 py-2 bg-emerald-700 
    border-b border-white text-white">
      <div>
        <h1 className="text-3xl">TODO LIST</h1>
      </div>
      <div className="flex items-center gap-4 ">
        <ThemeButton />
       <button className="border rounded-full w-10 p-1 transition duration-300 hover:opacity-40">
        <i className=" fa-solid fa-user text-2xl "></i>
     </button>
      </div>
    </div>
  );
}
