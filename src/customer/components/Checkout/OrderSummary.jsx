<<<<<<< HEAD
import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../state/Order/Action'
import { useLocation, useNavigate } from 'react-router-dom'
import { createPayment } from '../../../state/Payment/Action'
import {PaymentSuccess } from '../paymentSuccess/PaymentSuccess'

  
const OrderSummary = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const { order } = useSelector(store => store)
  const jwt = localStorage.getItem("jwt");
  const searchParams = new URLSearchParams(location.search)
  const orderId = searchParams.get("order_id")
  useEffect(() => {
    dispatch(getOrderById(orderId))
  }, [orderId])
  const handleCheckout = (e) => {
    e.preventDefault()
    const paymentData = { orderId,jwt, navigate }
    dispatch(createPayment(paymentData))
  }
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
      <AddressCard address={order.order?.shippingAddress}/>
      </div>
      <div>
        

      <div className='pt-3 lg:grid grid-cols-3 relative'>
        <div className='col-span-2'>
          {order.order?.orderItems.map((item) => <CartItem item={item} />)}
        </div>

      <div className='px-5 sticky  top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border'>
            <p className='uppercase font-bold opacity-60 pb-4 p-2'>Price Details</p>
            <hr />
            <div className='space-y-3 px-2 font-semibold'>
              <div className='flex justify-between pt-3 text-black '>
                <span>Price</span>
                  <span>₹{ order.order?.totalPrice}</span>

              </div>
              <div className='flex justify-between pt-3 text-black '>
                <span>Discount</span>
                <span className='text-green-600'>-₹{ order.order?.totalDiscountedPrice}</span>

              </div>
              <div className='flex justify-between pt-3 text-black '>
                <span>Delivery Charges</span>
                <span className='text-green-600'>Free</span>

              </div>
              <div className='flex justify-between pt-3 text-black '>
                <span>Total Amount</span> 
                <span className='text-lg'>₹{ order.order?.discount}</span>

              </div>
            </div>
            <hr />
            <div className='p-3 flex '>
                <Button  color='primary' variant='contained' className='w-full' onClick={()=>navigate('/api/payments')} >
                 Checkout
                  </Button>
                  </div>
          </div>
      </div>

      </div>
    </div>
    </div>
  )
}

export default OrderSummary
=======
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import AddressCard from '../AddressCard/AddressCard';
import CartItem from '../Cart/CartItem';
import { getOrderById } from '../../../state/Order/Action';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { order } = useSelector((store) => store);
  const jwt = localStorage.getItem('jwt');

  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('order_id');

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [orderId]);

  return (
    <div className="p-5">
      {/* Shipping Address */}
      <div className="shadow-lg rounded-md border p-5 mb-5">
        <AddressCard address={order.order?.shippingAddress} />
      </div>

      {/* Order Items & Price Summary */}
      <div className="lg:grid grid-cols-3 gap-6">
        {/* Order Items */}
        <div className="col-span-2 space-y-4">
          {order.order?.orderItems?.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>

        {/* Price Details */}
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border rounded-md p-4">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />

            <div className="space-y-3 font-semibold py-4 text-black">
              <div className="flex justify-between">
                <span>Price</span>
                <span>₹{order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">-₹{order.order?.totalDiscountedPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Total Amount</span>
                <span>₹{order.order?.discount}</span>
              </div>
            </div>

            <hr />

            <div className="pt-4">
              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={() => navigate('/api/payments')}
              >
                Proceed to Pay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
>>>>>>> 5ce0153 (reinitialize)
