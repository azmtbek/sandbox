import Head from "next/head";
import Login from "../components/Login";
import { useAuthContext } from "context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Web() {
  const user = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (user == null) router.push("/signin");
    console.log(user);
  }, [user]);
  return (
    <div>
      <Head>
        <title>Web</title>
      </Head>
      <Login />
    </div>
  );
}
