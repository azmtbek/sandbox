import React from "react";
import ThemeButton from "./ThemeButton";
import { useAuthContext } from "context/AuthContext";
import signOut from "@/tools/auth/signout";
import { useRouter } from "next/navigation";
import tw from "utils/tailwind";

export default function Header() {
  const user = useAuthContext();
  const router = useRouter();
  const handleSignOut = () => {
    signOut();
  };
  const handleSignIn = () => {
    router.push("/auth");
  };
  return (
    <div className="flex w-full justify-between px-10 py-2 bg-emerald-700 
      border-b border-white text-white">
      <div className="flex gap-3 items-center">
        <h1 className="text-3xl">TODO LIST</h1>
        <p>{user && user.email}</p>
      </div>
      <div className="flex items-center gap-4 ">
        <ThemeButton />
        <button
          onClick={user ? handleSignOut : handleSignIn}
          className={tw(
            "rounded-full border border-white border-opacity-0 hover:border-opacity-100",
            "w-content px-2 py-1 transition duration-300",
          )}
        >
          {user
            ? <i className="fa-solid fa-user text-2xl "></i>
            : (
              <span className="flex gap-1 justify-center items-center">
                <i className="fa-solid fa-user p-1 rounded-full border"></i>
                {" "}
                Sign in
              </span>
            )}
        </button>
      </div>
    </div>
  );
}
