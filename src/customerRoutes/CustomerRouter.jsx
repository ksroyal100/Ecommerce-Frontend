import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../customer/components/navigation/Navigation'
import HomePages from '../customer/pages/homepage/HomePages'
import Footer from '../customer/components/Footer/Footer'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/productDetails/ProductDetails'
import Checkout from "../customer/components/Checkout/Checkout"
import Order from "../customer/components/Order/Order"
import OrderDetails from "../customer/components/Order/OrderDetails"
import PaymentSuccess from '../customer/components/paymentSuccess/PaymentSuccess'
import PaymentSuccessDone from '../customer/components/paymentSuccess/PaymentSuccessDone'


const CustomerRouter = () => {
  return (
      <div>
          <div>
      <Navigation />
          </div>
      <Routes>
        <Route path='/login' element={<HomePages />} ></Route>
        <Route path='/register' element={<HomePages />} ></Route>
              <Route path='/' element={<HomePages />} ></Route>
              <Route path='/cart' element={<Cart />} ></Route>
              <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />} ></Route>
              <Route path='/product/:productId' element={<ProductDetails />} ></Route>
              <Route path='/checkout' element={<Checkout />} ></Route>
              <Route path='/account/order' element={<Order />} ></Route>
              <Route path='/account/order/:orderId' element={<OrderDetails />} ></Route>
              <Route path='/paymentSuccess' element={<PaymentSuccess />} ></Route>
              <Route path='/paymentSuccessDone' element={<PaymentSuccessDone />} ></Route>
              
          </Routes>
          <div>
      <Footer />
        </div>
    </div> 
  )
}

export default CustomerRouter