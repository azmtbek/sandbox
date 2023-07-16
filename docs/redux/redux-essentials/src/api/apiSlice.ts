import { SinglePost } from '@/features/posts/postsSlice'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  endpoints: builder => ({
    getPosts: builder.query<SinglePost[], void>({
      query: () => '/posts'
    }),
    getPost: builder.query<SinglePost, string>({
      query: postId => `/posts/${postId}`
    })
  })
})

export const { useGetPostsQuery, useGetPostQuery } = apiSlice