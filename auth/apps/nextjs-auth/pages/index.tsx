import { useAuthContext } from "context/AuthContext";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Web() {
  const user = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (user == null) router.push("/auth");
  }, [user]);
  return (
    <div>
      <Head>
        <title>Web</title>
      </Head>
      <div className="min-h-full grid place-items-center">
        <p>THis is the way</p>
        <ul className="m-10">
          <li>
            <Link className="hover:bg-slate-500 my-4 py-1 px-2 rounded-lg bg-slate-700 text-white" href={"/todo"}>todo app</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
