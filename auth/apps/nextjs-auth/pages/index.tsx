import Head from "next/head";
import { Button } from "ui";
import Login from "../components/Login";

export default function Web() {
  return (
    <div>
      <Head>
        <title>Web</title>
      </Head>
      <h1 className="flex w-full text-4xl">Web</h1>
      <Button />
      <Login />
      
    </div>
  );
}
