import React, { ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useEditPostMutation, useGetPostQuery } from "@/api/apiSlice";

export const EditPostForm = () => {
  const { postId = "" } = useParams();

  const { data: post } = useGetPostQuery(postId);
  const [updatePost] = useEditPostMutation();

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);

  const navigate = useNavigate();

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  const onSavePostClicked = async () => {
    if (title && content) {
      await updatePost({ id: postId, title, content });
      navigate(`/posts/${postId}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  );
};