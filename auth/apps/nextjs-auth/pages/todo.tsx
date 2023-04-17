import Button from "@/components/Button";
import Input from "@/components/Input";
import TodoItem from "@/components/TodoItem";
import useIsAuth from "@/hooks/useIsAuth";
import { addTodo, deleteTodo, getTodo, TodoType } from "@/tools/crudTodo";
import { useAuthContext } from "context/AuthContext";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import tw from "utils/tailwind";

export default function todo() {
  useIsAuth();
  const user = useAuthContext();

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<TodoType[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(false);

  const [isRefreshed, setIsRefreshed] = useState(true);
  const refresh = () => setIsRefreshed(true);

  const handleAdd = () => {
    console.log("click handleAdd");
    if (todo) {
      const lastId = (todos?.at(-1)?.orderId || 0) + 1;
      addTodo({ text: todo, complited: false, orderId: lastId }, user!.uid);
      refresh();
    }
    setTodo("");
  };

  useEffect(() => {
    console.log("click handle", isRefreshed);
    async function caller() {
      setIsLoading(true);
      const todos = await getTodo(user!.uid);
      setTodos((prev) => todos);
      setIsLoading(false);
    }
    if (isRefreshed) caller();
    if (!isFirstLoad) setIsFirstLoad(true);
    setIsRefreshed(false);
  }, [isRefreshed]);

  const handleUpdate = () => {
    console.log("click handleUpdate");
  };
  const handleDelete = (todoId: string) => {
    console.log("click handleDelete");
    deleteTodo(todoId, user!.uid);
    refresh();
  };
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
            className="rounded-r-sm w-60"
          />
          <Button
            onClick={handleAdd}
            className="rounded-l-sm w-20"
            disabled={todo == ""}
          >
            <h2 className="relative z-20 ">ADD</h2>
          </Button>
        </div>
        <div className="flex flex-col gap-2 pt-5 items-center justify-center max-w-screen">
          <button
            className="group w-10 text-lg border gap-2 border-slate-400 bg-slate-700 hover:bg-slate-600 p-1 rounded-2xl"
            onClick={refresh}
          >
            {/* <span>Refresh</span>   */}
            <i
              className={tw(
                "relative ",
                "fa-solid fa-arrows-rotate",
                isLoading ? "animate-spin" : "",
              )}
            >
              <span
                className={tw(
                  isLoading ? "" : "group-hover:inline-block",
                  "absolute z-10 hidden",
                  "top-[180%] left-1/2 w-16 -ml-8 text-sm",
                  "rounded-lg p-1 bg-slate-600",
                )}
              >
                Refresh
              </span>
            </i>
          </button>
          <div className="w-80 flex flex-col justify-start items-start gap-2">
            {!isFirstLoad
              ? (
                <div className="grid w-full h-24 place-items-center">
                  {/* <i className="fa-solid fa-spinner animate-spin"></i> */}
                </div>
              )
              : todos?.map(
                (todo) => (
                  <TodoItem
                    id={todo.id}
                    text={todo.text}
                    completed={todo.complited}
                    delete={handleDelete}
                    update={handleUpdate}
                  />
                ),
              )}
          </div>
        </div>
      </div>
    </>
  );
}
