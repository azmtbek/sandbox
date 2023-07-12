import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    }
  }
})


export const { postAdded } = postsSlice.actions

export default postsSlice.reducer

export const postsSelect = (state: RootState) => state.posts