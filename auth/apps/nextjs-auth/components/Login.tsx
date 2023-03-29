import React from "react";

export default function Login() {
  return (
    <div className="min-h-full grid place-items-center">
      <div className="flex flex-col items-center justify-center gap-4 min-w-[35ch] ">
        <h1 className="font-extrabold text-4xl select-none capitalize">
          Login
        </h1>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email address"
          className="outline-none text-slate-800 w-full max-w-[55ch] p-2
        border border-b-2 border-solid border-slate-500 focus:border-b-cyan-300
        dark:text-white dark:bg-slate-800 hover:border-b-cyan-300 
        dark:hover:bg-slate-900 dark:focus:bg-slate-900 rounded-lg 
        "
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="outline-none text-slate-800 w-full max-w-[55ch] p-2
        border border-b-2 border-solid border-slate-500 focus:border-b-cyan-300
        dark:text-white dark:bg-slate-800 hover:border-b-cyan-300 
         dark:hover:bg-slate-900 dark:focus:bg-slate-900 rounded-lg"
        />
        <button className="w-full max-w-[55ch] text-center dark:bg-slate-800
      border border-solid  border-slate-400 p-2 
    
      focus:bg-slate-900 duration-500 ease-in-out uppercase relative after:absolute
      after:top-0 after:right-full dark:after:bg-white after:z-10 after:w-full
      after:h-full overflow-hidden hover:after:translate-x-full after:duration-300
      hover:text-white focus:outline-none rounded-lg
      focus:after:translate-x-full text-slate-800 bg-white dark:text-white
      dark:focus:text-slate-800 dark:hover:text-slate-800 after:bg-slate-800
      focus:text-white
      ">
          <h2 className="relative z-20 ">login</h2>
        </button>
      </div>
    </div>
  );
}
