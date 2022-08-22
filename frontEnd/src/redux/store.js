import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cartRedux'
import userReducer from './userRedux'
import adminReducer from './adminRedux'
import productReducer from './productRedux'
import likesRedux from './likesRedux'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import orderRedux from './orderRedux'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  admin: adminReducer,
  product: productReducer,
  love: likesRedux,
  order: orderRedux,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
