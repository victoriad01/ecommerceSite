import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
    isFetching: false,
    error: false,
  },

  reducers: {
    getOrderStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    getOrderSuccess: (state, action) => {
      state.isFetching = false
      state.orders = action.payload
    },
    getOrderFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    deleteOrderStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    deleteOrderSuccess: (state, action) => {
      state.isFetching = false
      state.orders.splice(
        state.orders.findIndex((item) => item._id === action.payload),
        1
      )
    },
    deleteOrderFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    addOrderStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    addOrderSuccess: (state, action) => {
      state.isFetching = false
      state.orders.push(action.payload)
    },
    addOrderFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
  },
})

export const {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
  addOrderStart,
  addOrderSuccess,
  addOrderFailure,
} = orderSlice.actions
export default orderSlice.reducer
