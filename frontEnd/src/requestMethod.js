import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api'
let TOKEN = ''

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

const persistedData = localStorage.getItem('persist:root')

if (
  persistedData &&
  JSON.parse(persistedData).admin &&
  JSON.parse(JSON.parse(persistedData).admin).currentAdmin &&
  JSON.parse(JSON.parse(persistedData).admin).currentAdmin.accessToken
) {
  TOKEN = JSON.parse(JSON.parse(persistedData).admin).currentAdmin.accessToken
}

// else if (
//   persistedData &&
//   JSON.parse(persistedData).user &&
//   JSON.parse(JSON.parse(persistedData).user).currentUser &&
//   JSON.parse(JSON.parse(persistedData).user).currentUser.accessToken
// ) {
//   TOKEN = JSON.parse(JSON.parse(persistedData).user).currentUser.accessToken
// }

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
})

// Set token after login when it is not in the localStorage
export const setToken = (token) => {
  userRequest.defaults.headers['token'] = `Bearer ${token}`
}
