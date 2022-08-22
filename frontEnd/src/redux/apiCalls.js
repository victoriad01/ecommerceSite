import { loginStart, loginSuccess, loginFailure } from './userRedux'

import {
  adminLoginStart,
  adminLoginSuccess,
  adminLoginFailure,
} from './adminRedux'

import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from './productRedux'

import { publicRequest, setToken, userRequest } from '../requestMethod'
import { addOrderFailure, addOrderStart, addOrderSuccess } from './orderRedux'

// Client Login
export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}

// Admin Login
export const adminLogin = async (dispatch, user) => {
  dispatch(adminLoginStart())
  try {
    const res = await publicRequest.post('/auth/login', user)
    dispatch(adminLoginSuccess(res.data))
    setToken(res.data.accessToken)
  } catch (err) {
    dispatch(adminLoginFailure())
  }
}

// GET PRODUCT
export const getProducts = async (dispatch) => {
  dispatch(getProductStart())
  try {
    const res = await publicRequest.get('/products')
    dispatch(getProductSuccess(res.data))
  } catch (err) {
    dispatch(getProductFailure())
  }
}

// DELETE PRODUCT
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart())
  try {
    const res = await userRequest.delete(`/products/${id}`)
    dispatch(deleteProductSuccess(id))
    console.log(res.data)
  } catch (err) {
    dispatch(deleteProductFailure())
  }
}

// UPDATE PRODUCT
export const updateProduct = async (id, uProduct, dispatch) => {
  dispatch(updateProductStart())
  try {
    const res = await userRequest.put(`/products/${id}`)
    dispatch(updateProductSuccess({ id, uProduct }))
    console.log(res.data)
  } catch (err) {
    dispatch(updateProductFailure())
  }
}

// ADD A PRODUCT
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart())
  try {
    const res = await userRequest.post(`/products/`, product)
    dispatch(addProductSuccess(res.data))
    console.log(res.data)
  } catch (err) {
    dispatch(addProductFailure())
  }
}

// ADD AN ORDER
export const addOrder = async (order, dispatch) => {
  try {
    dispatch(addOrderStart())
    const res = await userRequest.post(`/orders`, order)
    dispatch(addOrderSuccess())
    console.log(res.data)
  } catch (err) {
    dispatch(addOrderFailure())
    console.log(err)
  }
}
// export const addProduct = async (product, dispatch) => {
//   dispatch(addProductStart())
//   try {
//     const res = await userRequest.post(`/products/`, product)
//     dispatch(addProductSuccess(res.data))
//     console.log(res.data)
//   } catch (err) {
//     dispatch(addProductFailure())
//   }
// }
