import Login from "@/components/Login";
import signIn from "@/tools/auth/signin";
import signUp from "@/tools/auth/signup";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import tw from "utils/tailwind";

export default function auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isError, setIsError] = useState(false);
  const [textError, setTextError] = useState("");
  const router = useRouter();
  const reset = () => {
    setEmail("");
    setPassword("");
    setIsError(false);
    setTextError("");
  };
  const handleLoginChange = () => {
    reset();
    setIsLogin((prev) => !prev);
  };

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();
    if (email == "" || password == "") {
      setIsError(true);
      setTimeout(() => setIsError(false), 1000);
      return;
    }

    const { result, error } = isLogin
      ? await signIn(email, password)
      : await signUp(email, password);

    if (error) {
      setIsError(true);
      if (error.code == "auth/email-already-in-use") {
        return setTextError("This email is already in use");
      }
    }

    // else successful
    return router.push("/");
  };

  return (
    <div className="min-h-full grid place-items-center">
      <form onSubmit={handleForm}>
        <div className="flex flex-col items-center justify-center gap-4 min-w-[35ch] ">
          <h1 className="font-extrabold text-4xl select-none capitalize duration-300">
            {isLogin ? "Sign in" : "Sign up"}
          </h1>
          <p
            className={tw(
              "self-start duration-300 ",
              "text-red-400",
              isError ? "" : "opacity-0",
            )}
          >
            {textError ? textError : "Please fill in the fields"}
          </p>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            required
            className={tw(
              "outline-none text-slate-800 w-full max-w-[55ch] p-2",
              "border border-b-2 border-solid border-slate-500 focus:border-b-cyan-300",
              "dark:text-white dark:bg-slate-800 hover:border-b-cyan-300 ",
              "dark:hover:bg-slate-900 dark:focus:bg-slate-900 rounded-lg ",
            )}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={tw(
              "outline-none text-slate-800 w-full max-w-[55ch] p-2",
              "border border-b-2 border-solid border-slate-500 focus:border-b-cyan-300",
              "dark:text-white dark:bg-slate-800 hover:border-b-cyan-300 ",
              "dark:hover:bg-slate-900 dark:focus:bg-slate-900 rounded-lg ",
            )}
          />
          <button
            type="submit"
            className={tw(
              "w-full max-w-[55ch] text-center dark:bg-slate-800",
              "border border-solid  border-slate-400 p-2 relative after:absolute",
              "focus:bg-slate-900 duration-500 ease-in-out uppercase ",
              "after:top-0 after:right-full dark:after:bg-white after:z-10 after:w-full",
              "after:h-full overflow-hidden hover:after:translate-x-full after:duration-300",
              "hover:text-white focus:outline-none rounded-lg",
              "focus:after:translate-x-full text-slate-800 bg-white dark:text-white",
              "dark:focus:text-slate-800 dark:hover:text-slate-800 after:bg-slate-800",
              "focus:text-white",
            )}
          >
            <h2 className="relative z-20 ">
              {isLogin ? "sign in" : "sign up"}
            </h2>
          </button>

          <div onClick={handleLoginChange}>
            Do you {isLogin ? "not" : ""} have an account?{" "}
            <span className="text-red-400 cursor-pointer duration-300 hover:text-red-500">
              {isLogin ? "Sign up" : "Sign in"}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
