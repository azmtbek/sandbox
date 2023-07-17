import { apiSlice } from '@/api/apiSlice'
import { client } from '@/api/client'
import { RootState } from '@/app/store'
import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit'


export interface User {
  id: string,
  name: string,
}
/* Temporarily ignore adapter - we'll use this again shortly
const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState()
*/

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  return response.data
})

export const selectUsersResult = apiSlice.endpoints.getUsers.select()

const emptyUsers = []

export const selectAllUsers = createSelector(
  selectUsersResult,
  usersResult => usersResult?.data ?? emptyUsers
)

export const selectUserById = createSelector(
  selectAllUsers,
  (state, userId) => userId,
  (users, userId) => (users as User[]).find(user => user.id === userId)
)



// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder.addCase(fetchUsers.fulfilled, usersAdapter.setAll)
//   }
// })

// export default usersSlice.reducer



/* Temporarily ignore selectors - we'll come back to this later
export const { selectAll: selectAllUsers, selectById: selectUserById } =
  usersAdapter.getSelectors((state: RootState) => state.users)
  */