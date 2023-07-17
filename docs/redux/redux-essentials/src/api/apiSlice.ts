import { SinglePost } from '@/features/posts/postsSlice'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    getPosts: builder.query<SinglePost[], void>({
      query: () => '/posts',
      providesTags: ['Post']
    }),
    getPost: builder.query<SinglePost, string>({
      query: postId => `/posts/${postId}`
    }),
    addNewPost: builder.mutation({
      query: initialPost => ({
        url: '/posts',
        method: 'POST',
        body: initialPost
      }),
      invalidatesTags: ['Post']
    })
  })
})

export const { useGetPostsQuery, useGetPostQuery, useAddNewPostMutation } = apiSlice