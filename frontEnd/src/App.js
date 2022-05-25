import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pay from './pages/Pay'
import SuccessPayment from './pages/SuccessPayment'
import Annoucement from './components/Annoucement'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Error from './pages/Error'
import AdminSide from './admin/pages/AdminSide'

const MainApp = ({ children }) => {
  return (
    <>
      <Annoucement />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <MainApp>
              <Home />
            </MainApp>
          }
        />
        <Route
          path='/productlist'
          element={
            <MainApp>
              <ProductList />
            </MainApp>
          }
        />
        <Route
          path='/product'
          element={
            <MainApp>
              <Product />
            </MainApp>
          }
        />
        <Route
          path='/register'
          element={
            <MainApp>
              <Register />
            </MainApp>
          }
        />
        <Route
          path='/login'
          element={
            <MainApp>
              <Login />
            </MainApp>
          }
        />
        <Route
          path='/cart'
          element={
            <MainApp>
              <Cart />
            </MainApp>
          }
        />
        <Route
          path='/pay'
          element={
            <MainApp>
              <Pay />
            </MainApp>
          }
        />
        <Route
          path='/paymentsuccess'
          element={
            <MainApp>
              <SuccessPayment />
            </MainApp>
          }
        />
        <Route path='*' element={<Error />} />
        <Route path='/onlyadmin' element={<AdminSide />} />
      </Routes>
    </Router>
  )
}

export default App
