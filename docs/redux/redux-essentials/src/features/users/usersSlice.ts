import { client } from '@/api/client'
import { RootState } from '@/app/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Tianna Jenkins' },
  { id: '1', name: 'Kevin Grant' },
  { id: '2', name: 'Madison Price' }
]

interface User {
  id: string,
  name: string,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  return response.data
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export default usersSlice.reducer


export const selectAllUsers = (state: RootState) => state.users

export const selectUserById = (state: RootState, userId: string | undefined) =>
  state.users.find(user => user.id === userId)