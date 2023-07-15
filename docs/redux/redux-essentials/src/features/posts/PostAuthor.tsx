import React from "react";
import { useAppSelector } from "@/app/hooks";
import { selectUserById } from "../users/usersSlice";

export const PostAuthor = (
  { userId }: { userId: string | number },
) => {
  const author = useAppSelector((state) => selectUserById(state, userId));

  return <span>by {author ? author.name : "Unknown author"}</span>;
};
