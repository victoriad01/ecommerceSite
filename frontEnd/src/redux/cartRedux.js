import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    shoppingBag: 0,
  },

  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1
      state.products.push(action.payload)
      state.total += action.payload.price * action.payload.quantity
      state.shoppingBag += action.payload.quantity
    },

    clearCart: (state) => {
      state.products = []
      state.quantity = 0
      state.total = 0
      state.shoppingBag = 0
    },

    deleteACartItem: (state, action) => {
      state.quantity -= 1
      state.shoppingBag -= 1
      state.products.splice(
        state.products.findIndex(
          (item) => item._id === action.payload.product._id
        ),
        1
      )

      state.total -=
        action.payload.product.price * action.payload.product.quantity
    },

    increaseCartQuantity: (state, action) => {
      // The way to find an item dynamically in an array
      const index = state.products.findIndex(
        (product) => product._id === action.payload.product._id
      )
      // Updating the state
      state.products[index].quantity += 1
    },

    decreaseCartQuantity: (state, action) => {
      const index = state.products.findIndex(
        (product) => product._id === action.payload.product._id
      )
      if (state.products[index].quantity > 1) {
        state.products[index].quantity -= 1
      }
    },
  },
})

export const {
  addProduct,
  clearCart,
  deleteACartItem,
  increaseCartQuantity,
  decreaseCartQuantity,
} = cartSlice.actions

export default cartSlice.reducer
