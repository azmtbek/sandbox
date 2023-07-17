import { Post } from "@/features/posts/postsSlice"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { User } from "@/features/users/usersSlice"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi" }),
  tagTypes: ["Post", "User"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
      providesTags: (result = [], error, arg) => result
        ? [
          ...result.map(({ id }) => ({ type: 'Post' as const, id })),
          { type: 'Post', id: 'LIST' },
        ]
        : [{ type: 'Post', id: 'LIST' }],
    }),
    getPost: builder.query<Post, string>({
      query: (postId) => `/posts/${postId}`,
      providesTags: (result, error, arg) => [{ type: 'Post', id: arg }]
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
        method: "POST",
        body: initialPost,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    editPost: builder.mutation({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "PATCH",
        body: post,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg.id }]
    }),
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      providesTags: [{ type: 'User', id: "LIST" }]
    })
  }),
})

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetUsersQuery,
  useAddNewPostMutation,
  useEditPostMutation,
} = apiSlice
