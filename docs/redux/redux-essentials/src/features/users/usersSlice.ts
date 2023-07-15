import { client } from '@/api/client'
import { RootState } from '@/app/store'
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'


interface User {
  id: string,
  name: string,
}

const usersAdapter = createEntityAdapter<User>()

const initialState = usersAdapter.getInitialState()


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  return response.data
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, usersAdapter.setAll)
  }
})

export default usersSlice.reducer



export const { selectAll: selectAllUsers, selectById: selectUserById } =
  usersAdapter.getSelectors((state: RootState) => state.users)