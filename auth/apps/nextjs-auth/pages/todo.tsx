import Button from "@/components/Button";
import Input from "@/components/Input";
import useIsAuth from "@/hooks/useIsAuth";
import { addTodo, getTodo, TodoType } from "@/tools/crudTodo";
import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function todo() {
  useIsAuth();
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<TodoType[]>();
  const [isNewAdded, setIsNewAdded] = useState(false);
  const handleAdd = () => {
    console.log("click handleAdd");
    if (todo) addTodo(todo);
    setTodo("");
  };
  useEffect(() => {
    async function caller() {
      const todos = await getTodo();
      setTodos((prev) => todos);
    }
    caller();
  }, []);
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
            name="todo"
            id="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add todo, e.g. do chores"
            className="rounded-r-sm w-[35ch]"
          />
          <Button
            onClick={handleAdd}
            className="rounded-l-sm w-[10ch]"
            disabled={todo == ""}
          >
            <h2 className="relative z-20 ">ADD</h2>
          </Button>
        </div>
        <div className="flex flex-col gap-2 pt-5 items-start max-w-screen">
          <div>
            {todos?.map(
              (todo) => <p key={todo.id}>{todo.data.text}</p>,
            )}
          </div>
        </div>
      </div>
    </>
  );
}