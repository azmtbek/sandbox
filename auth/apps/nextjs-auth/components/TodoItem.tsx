import { useState } from "react";
import Tooltip from "./Tooltip";
import tw from "utils/tailwind";
import { UpdateTodoType } from "@/tools/crudTodo";

type TodoItemProps = {
  id: string;
  text: string;
  completed: boolean;
  delete: (id: string) => void;
  update: (id: string, data: UpdateTodoType) => void;
};

export default function TodoItem(props: TodoItemProps) {
  const [isDeleteOn, setIsDeleteOn] = useState(false);
  const [isUpdateOn, setIsUpdateOn] = useState(false);
  const [changeText, setChangeText] = useState("");
  const handleDelete = () => setIsDeleteOn(true);
  const handleUpdate = () => {
    setChangeText(props.text);
    setIsUpdateOn(true);
  };
  const theDelete = () => {
    props.delete(props.id);
    setIsDeleteOn(false);
  };
  const theUpdate = () => {
    if (props.text != changeText && changeText !== "") {
      props.update(props.id, { text: changeText });
    }
    setIsUpdateOn(false);
  };

  return (
    <div className="flex gap-3 w-full" key={props.id}>
      {isDeleteOn
        ? (
          <>
            <div className="flex-1 text-lg px-1 border border-slate-800">
              <span>Please confirm.</span>
            </div>
            <button
              className="uppercase bg-red-500 text-white p-1 rounded-md text-sm"
              onClick={theDelete}
            >
              delete
            </button>
            <button
              className="uppercase bg-slate-600 w-6 text-white p-1 rounded-md text-sm"
              onClick={() => setIsDeleteOn(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </>
        )
        : isUpdateOn
        ? (
          <>
            <div className="flex-1 text-lg">
              <input
                type="text"
                name=""
                id=""
                value={changeText}
                className={tw(
                  "outline-none text-slate-800 px-1 w-full",
                  "border border-b-2 border-solid border-slate-500 focus:border-b-cyan-300",
                  "dark:text-white dark:bg-slate-800 hover:border-b-cyan-300 ",
                  "dark:hover:bg-slate-900 dark:focus:bg-slate-900 rounded-lg ",
                )}
                onChange={(e) => setChangeText(e.target.value)}
              />
            </div>
            <button
              className="uppercase bg-green-600 w-6 text-white p-1 rounded-md text-sm"
              onClick={theUpdate}
            >
              <i className="fa-solid fa-check"></i>
            </button>
            <button
              className="uppercase bg-slate-600 w-6 text-white p-1 rounded-md text-sm"
              onClick={() => setIsUpdateOn(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </>
        )
        : (
          <>
            {
              /* <input
              type="checkbox"
              checked={props.completed}
              onChange={() => {}}
            /> */
            }
            <div className="flex-1 text-lg overflow-x-scroll border border-slate-800 px-1">
              <span>{props.text}</span>
            </div>
            <button onClick={handleUpdate} className="w-6 p-1 group relative ">
              <i className="fa-solid fa-pencil"></i>
              <Tooltip text="Update" />
            </button>
            <button onClick={handleDelete} className="w-6 p-1 group relative duration-500">
              <i className="fa-solid fa-trash">
              </i>
              <Tooltip text="Delete" />
            </button>
          </>
        )}
    </div>
  );
}
