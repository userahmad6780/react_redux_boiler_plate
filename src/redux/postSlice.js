import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
    async () => {
        try {
            const res = await axios('https://jsonplaceholder.typicode.com/posts')
            const data = await res.data
            return data
        } catch (error) {
            return error
        }
    }
)

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    status: 'idle',
    error: null
  },
  reducers: {
  },
  extraReducers:  (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
          state.status = 'pending'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
          state.status = 'idle'
          state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
          state.status = 'idle'
          state.error = action.error.message
      })
    }
})

// Action creators are generated for each case reducer function
// export const { } = postSlice.actions

export default postSlice.reducer