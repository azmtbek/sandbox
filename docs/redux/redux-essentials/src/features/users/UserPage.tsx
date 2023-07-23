import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import { selectUserById } from "../users/usersSlice";
import { Post } from "../posts/postsSlice";
import { useAppSelector } from "@/app/hooks";
import { createSelector } from "@reduxjs/toolkit";
import { useGetPostsQuery } from "@/api/apiSlice";

export const UserPage = () => {
  const { userId } = useParams();

  const user = useAppSelector((state) => selectUserById(state, userId || ""));

  const selectPostsForUser = useMemo(() => {
    const emptyArray = [];
    return createSelector(
      (res) => res.data,
      (res, userId) => userId,
      (data = [], userId) =>
        (data as Post[]).filter((post) => post.user === userId) ?? emptyArray,
    );
  }, []);

  const { postsForUser } = useGetPostsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      postsForUser: selectPostsForUser(result, userId),
    }),
  });

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user?.name}</h2>

      <ul>{postTitles}</ul>
    </section>
  );
};
