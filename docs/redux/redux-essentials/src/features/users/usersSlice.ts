import { apiSlice } from '@/api/apiSlice'
import { client } from '@/api/client'
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  // createSlice
} from '@reduxjs/toolkit'

import type { RootState } from '@/app/store'
import type { EntityState } from "@reduxjs/toolkit"

export interface User {
  id: string,
  name: string,
}
const usersAdapter = createEntityAdapter<User>()

const initialState = usersAdapter.getInitialState()

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query<EntityState<User>, void>({
      query: () => '/users',
      transformResponse: (responseData: User[]) => {
        return usersAdapter.setAll(initialState, responseData)
      }
    })
  })
})

export const { useGetUsersQuery } = extendedApiSlice

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  return response.data
})

export const usersEndpointSlice = extendedApiSlice.endpoints.getUsers

export const selectUsersResult = usersEndpointSlice.select()

const selectUsersData = createSelector(
  selectUsersResult,
  usersResult => usersResult.data
)

// const emptyUsers = []

// export const selectAllUsers = createSelector(
//   selectUsersResult,
//   usersResult => usersResult?.data ?? emptyUsers
// )

// export const selectUserById = createSelector(
//   selectAllUsers,
//   (state, userId) => userId,
//   (users, userId) => (users as User[]).find(user => user.id === userId)
// )



// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder.addCase(fetchUsers.fulfilled, usersAdapter.setAll)
//   }
// })

// export default usersSlice.reducer



export const { selectAll: selectAllUsers, selectById: selectUserById } =
  usersAdapter.getSelectors<RootState>((state) => selectUsersData(state) ?? initialState)
