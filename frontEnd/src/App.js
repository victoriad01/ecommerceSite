import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useSelector } from 'react-redux'

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
import AdminLogin from './admin/pages/Admin/AdminLogin'
import WishList from './pages/WishList'
import Search from './pages/Search'
import FreeStyle from './pages/FreeStyle'
import SecondFreeStyle from './pages/SecondFreeStyle'

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
  const user = useSelector((state) => state.user.currentUser)
  const isAdmin = useSelector((state) => state.admin.currentAdmin?.isAdmin)

  // const getLocalStorage =
  //   JSON.parse(JSON.parse(localStorage.getItem('persist:root')).admin)
  //     .currentAdmin || ''
  // const admin = getLocalStorage.isAdmin

  /* const persistedData = localStorage.getItem('persist:root')
  debugger
  if (
    persistedData &&
    JSON.parse(persistedData).admin &&
    JSON.parse(JSON.parse(persistedData).admin).currentAdmin &&
    JSON.parse(JSON.parse(persistedData).admin).currentAdmin.isAdmin
  ) {
    isAdmin = JSON.parse(JSON.parse(persistedData).admin).currentAdmin.isAdmin

    console.log(isAdmin)

  }
 */
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
          path='/products/:categories'
          element={
            <MainApp>
              <ProductList />
            </MainApp>
          }
        />
        <Route
          path='/product/:id'
          element={
            <MainApp>
              <Product />
            </MainApp>
          }
        />
        <Route path='/register'>
          {user ? (
            <Route path='/register' element={<Navigate to='/' />} />
          ) : (
            <Route
              path='/register'
              element={
                <MainApp>
                  <Register />
                </MainApp>
              }
            />
          )}
        </Route>
        <Route path='/login'>
          {user ? (
            <Route path='/login' element={<Navigate to='/' />} />
          ) : (
            <Route
              path='/login'
              element={
                <MainApp>
                  <Login />
                </MainApp>
              }
            />
          )}
        </Route>
        <Route
          path='/cart'
          element={
            <MainApp>
              <Cart />
            </MainApp>
          }
        />
        <Route
          path='/wishlist'
          element={
            <MainApp>
              <WishList />
            </MainApp>
          }
        />
        <Route
          path='/search'
          element={
            <MainApp>
              <Search />
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
        <Route path='/adminlogin' element={<AdminLogin />} />

        <Route path='/freestyle' element={<FreeStyle />} />
        <Route path='/freestyle2' element={<SecondFreeStyle />} />

        {isAdmin && (
          <>
            <Route path='/onlyadmin' element={<AdminSide />} />
            <Route path='/userlistpage' element={<Userlistpage />} />
            <Route path='/user/:userId' element={<Userpage />} />
            <Route path='/user/newuser' element={<NewUser />} />
            <Route path='/productss' element={<ProductsList />} />
            <Route
              path='/singleproduct/:productId'
              element={<SingleProduct />}
            />
            <Route path='/newproduct' element={<NewProduct />} />
          </>
        )}
      </Routes>
    </Router>
  )
}

export default App
