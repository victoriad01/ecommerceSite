import { createSlice } from '@reduxjs/toolkit'

const likesSlice = createSlice({
  name: 'like',
  initialState: {
    likes: 0,
    products: [],
    quantity: 0,
    total: 0,
  },

  reducers: {
    addLikes: (state, action) => {
      state.likes += 1
      state.products.push(action.payload.sent)
      state.total += action.payload.sent.price * action.payload.sent.quantity
    },

    clearLikes: (state) => {
      state.likes = 0
      state.products = []
      state.quantity = 0
      state.total = 0
    },

    deleteLikes: (state, action) => {
      state.likes -= 1
      state.products.splice(
        state.products.findIndex(
          (item) => item._id === action.payload.product._id
        ),
        1
      )
      state.total -=
        action.payload.product.price * action.payload.product.quantity
    },
  },
})

export const { addLikes, clearLikes, deleteLikes } = likesSlice.actions
export default likesSlice.reducer
