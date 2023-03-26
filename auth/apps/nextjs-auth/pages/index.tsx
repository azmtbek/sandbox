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
      <i className="fa-solid fa-dragon fa-4x"></i>
      <i className="fa-solid fa-user"></i>
    </div>
  );
}
