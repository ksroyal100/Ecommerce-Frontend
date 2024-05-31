import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../state/Cart/Action'

const Cart = () => {
  const navigate = useNavigate()
  const {cart} = useSelector(store=>store)
  const dispatch = useDispatch()
  const handleCheckout = () => {
    navigate('/checkout?step=2')
  }

  useEffect(() => {
    dispatch(getCart())
  },[cart.updateCartItem, cart.deleteCartItem])

  return (
    <div>
      <div className='pt-3 lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
          {cart.cart?.cartItems.map((item) => <CartItem item={item} />)}
        </div>

      <div className='px-5 sticky  top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border'>
            <p className='uppercase font-bold opacity-60 pb-4 p-2'>Price Details</p>
            <hr />
            <div className='space-y-3 px-2 font-semibold'>
              <div className='flex justify-between pt-3 text-black '>
                <span>Price</span>
                <span>{ cart.cart?.totalPrice}</span>

              </div>
              <div className='flex justify-between pt-3 text-black '>
                <span>Discount</span>
                <span className='text-green-600'>-₹{cart.cart?.discounts }</span>

              </div>
              <div className='flex justify-between pt-3 text-black '>
                <span>Delivery Charges</span>
                <span className='text-green-600'>Free</span>

              </div>
              <div className='flex justify-between pt-3 text-black '>
                <span>Total Amount</span>
                <span className='text-lg'>{cart.cart?.totalDiscountedPrice
}</span>

              </div>
            </div>
            <hr />
            <div className='p-3 flex '>
                <Button onClick={handleCheckout} color='primary' variant='contained' className='w-full' >
                 Checkout
                  </Button>
                  </div>
          </div>
      </div>

      </div>
    </div>
  )
}

export default Cart