import Button from "@/components/Button";
import Input from "@/components/Input";
import signIn from "@/tools/auth/signin";
import signUp from "@/tools/auth/signup";
import { useAuthContext } from "context/AuthContext";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import tw from "utils/tailwind";

export default function auth() {
  const [isLogin, setIsLogin] = useState(true);
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
    return router.push("/");
  };
  const user = useAuthContext();
  useEffect(() => {
    // console.log(window.history.state);
    if (user) router.back();
  }, [window]);
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
          <Input
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">
            <h2 className="relative z-20 ">
              {isLogin ? "sign in" : "sign up"}
            </h2>
          </Button>

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
