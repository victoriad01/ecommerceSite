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
import Userlistpage from './admin/pages/Userlist/userlistpage'
import Userpage from './admin/pages/User/userpage'
import NewUser from './admin/pages/NewUser/NewUser'
import ProductsList from './admin/pages/Products/ProductsList'
import SingleProduct from './admin/pages/Product/SingleProduct'
import NewProduct from './admin/pages/Newproduct/NewProduct'

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
        <Route path='/userlistpage' element={<Userlistpage />} />
        <Route path='/user/:userId' element={<Userpage />} />
        <Route path='/user/newuser' element={<NewUser />} />

        <Route path='/products' element={<ProductsList />} />
        <Route path='/product/:productId' element={<SingleProduct />} />
        <Route path='/newproduct' element={<NewProduct />} />
      </Routes>
    </Router>
  )
}

export default App
