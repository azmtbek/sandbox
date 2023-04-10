import Button from "@/components/Button";
import Input from "@/components/Input";
import useIsAuth from "@/hooks/useIsAuth";
import Head from "next/head";
import React from "react";

export default function todo() {
  useIsAuth();
  
  return (
    <>
      <Head>
        <title>TODO App</title>
      </Head>
      <div className="min-h-full grid place-items-center">
        <h1 className="text-4xl p-10">TODO APP</h1>
        <div className="flex max-w-full ">
          <Input
            type="text"
            name=""
            id=""
            placeholder="Add todo, e.g. do chores"
            className="rounded-r-sm w-[35ch]"
          />
          <Button className="rounded-l-sm w-[10ch]">
            <h2 className="relative z-20 ">ADD</h2>
          </Button>
        </div>
        <div className="flex flex-col gap-2 pt-5 items-start max-w-full">
          <p>text</p>
          <p>text</p>
        </div>
      </div>
    </>
  );
}
