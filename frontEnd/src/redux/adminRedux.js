import { createSlice } from '@reduxjs/toolkit'

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    currentAdmin: null,
    isFetching: false,
    error: false,
  },

  reducers: {
    adminLoginStart: (state) => {
      state.isFetching = true
    },
    adminLoginSuccess: (state, action) => {
      state.isFetching = false
      state.currentAdmin = action.payload
    },
    adminLoginFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    adminLogout: (state) => {
      state.currentAdmin = null
    },
  },
})

export const {
  adminLoginStart,
  adminLoginSuccess,
  adminLoginFailure,
  adminLogout,
} = adminSlice.actions

export default adminSlice.reducer
