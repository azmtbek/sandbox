import React from "react";

export default function Login() {
  return (
    <div className=" flex flex-col items-center justify-center gap-4 ">
      <h1 className="font-extrabold text-4xl select-none ">Login</h1>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email address"
        className="outline-none text-slate-800 w-full max-w-[35ch] p-2
        border-b-2 border-solid border-white focus:border-purple-600"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        className="outline-none text-slate-800 w-full max-w-[35ch] p-2
        border-b-2 border-solid border-white focus:border-cyan-300"
      />
      <button className="w-full max-w-[35ch] text-center bg-slate-800
      border border-solid  border-white p-2 hover:bg-slate-900
      focus:bg-slate-900 duration-300 uppercase relative after:absolute
      after:top-0 after:right-full after:bg-white after:z-10 after:w-full
      after:h-full overflow-hidden hover:after:translate-x-full after:duration-300
      hover:text-slate-900">
        <h2 className="relative z-20">login</h2>
      </button>
    </div>
  );
}
