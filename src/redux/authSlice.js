import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: true,
  },
  reducers: {
    getUser: state => {
        let userInfo = JSON.parse(localStorage.getItem('user'));
        state.user = userInfo;
        state.loading = false; 
    },
    login: (state, action) => {
        localStorage.setItem('user', JSON.stringify(action.payload));
        state.user = action.payload
    },
    logout: state => {
        localStorage.removeItem('user')
        state.user = null
    }
  }
})

// Action creators are generated for each case reducer function
export const { getUser, login, logout } = authSlice.actions

export default authSlice.reducer