import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
        localStorage.setItem('user', JSON.stringify(action.payload));
        state.user = action.payload
    },
    logout: state => {
        localStorage.removeItem('user')
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer