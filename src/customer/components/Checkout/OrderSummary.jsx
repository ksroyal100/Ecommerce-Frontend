import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../state/Order/Action'
import { useLocation } from 'react-router-dom'

  
const OrderSummary = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const {order} = useSelector(store=>store) 
  const searchParams = new URLSearchParams(location.search)
  const orderId = searchParams.get("order_id")
  useEffect(() => {
    dispatch(getOrderById(orderId))
  },[orderId])
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard />
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
                <span>₹4687</span>

              </div>
              <div className='flex justify-between pt-3 text-black '>
                <span>Discount</span>
                <span className='text-green-600'>-₹687</span>

              </div>
              <div className='flex justify-between pt-3 text-black '>
                <span>Delivery Charges</span>
                <span className='text-green-600'>Free</span>

              </div>
              <div className='flex justify-between pt-3 text-black '>
                <span>Total Amount</span> 
                <span className='text-lg'>₹4000</span>

              </div>
            </div>
            <hr />
            <div className='p-3 flex '>
                <Button color='primary' variant='contained' className='w-full' >
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