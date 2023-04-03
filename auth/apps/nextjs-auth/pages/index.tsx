import Head from "next/head";
import Login from "../components/Login";

export default function Web() {
  return (
    <div>
      <Head>
        <title>Web</title>
      </Head>
      <Login />
    </div>
  );
}
