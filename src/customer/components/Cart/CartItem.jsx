<<<<<<< HEAD
import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../state/Cart/Action';

const CartItem = ({ item , showButton}) => {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt");
  const handleUpdateCartItem = (num) => {
    const data = { data: { quantity: item.quantity + num }, cartItemId: item?._id, jwt }
    console.log("update data",data)
    dispatch(updateCartItem(data))
  }
  const handleRemoveCartItem = () => {
    const data = { cartItemId: item?._id, jwt };

    dispatch(removeCartItem(data))
  }
  return (
      <div className='p-5 shadow-lg border rounded-md'>
          <div className='flex items-center'>
              <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                  <img className='w-full h-full object-cover object-top' src={item.product.imageUrl} alt='image'/>
        </div>
        <div className='ml-5 space-y-1'>
          <p>{item.product.title}</p>
          <p className='opacity-70'> Size: {item.size}</p>
          <p className='opacity-70 mt-2'>Seller: {item.product.brand}</p>
          <div className='flex space-x-5 items-center text-grey-900 mt-10'>
            <p className='font-semibold'>₹{item.discountedPrice}</p>
            <p className='opacity-50 line-through'>₹{item.price}</p>
            <p className='text-green-600 font-semibold'>{item.discountedPersent}% Off</p>
              </div>
        </div>
      
      </div>
    
        <div className='lg:flex items-center lg:space-x-10 '>
          <div className='flex items-center space-x-2'>
            <IconButton onClick={() => handleUpdateCartItem(-1)} disabled={item?.quantity <= 1}>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className='py-1 px-7 border rounded-sm'>{item?.quantity}</span>
            <IconButton onClick={() => handleUpdateCartItem(1)} sx={{ color: "RGB(145 85 253" }}>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div>
            <Button onClick={handleRemoveCartItem} sx={{ color: "RGB(145 85 253" }}>remove</Button>
          </div>
        </div>
    </div>
  )
}

export default CartItem
=======
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { removeCartItem, updateCartItem } from '../../../state/Cart/Action';

const CartItem = ({ item, showButton = true }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');

  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?._id,
      jwt,
    };
    dispatch(updateCartItem(data));
  };

  const handleRemoveCartItem = () => {
    const data = { cartItemId: item?._id, jwt };
    dispatch(removeCartItem(data));
  };

  return (
    <div className="p-5 shadow-lg border rounded-md mb-4">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.imageUrl}
            alt={item?.product?.title}
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-medium text-lg">{item?.product?.title}</p>
          <p className="opacity-70">Size: {item?.size}</p>
          <p className="opacity-70 mt-2">Seller: {item?.product?.brand}</p>
          <div className="flex space-x-5 items-center text-grey-900 mt-4">
            <p className="font-semibold text-lg">₹{item?.discountedPrice}</p>
            <p className="opacity-50 line-through">₹{item?.price}</p>
            <p className="text-green-600 font-semibold">
              {item?.discountedPersent}% Off
            </p>
          </div>
        </div>
      </div>

      {showButton && (
        <div className="mt-6 lg:flex items-center lg:space-x-10">
          <div className="flex items-center space-x-2">
            {/* <IconButton
              aria-label="Decrease quantity"
              onClick={() => handleUpdateCartItem(-1)}
              disabled={item?.quantity <= 1}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">{item?.quantity}</span>
            <IconButton
              aria-label="Increase quantity"
              onClick={() => handleUpdateCartItem(1)}
              sx={{ color: 'rgb(145, 85, 253)' }}
            >
              <AddCircleOutlineIcon />
            </IconButton> */}
          </div>
          <div>
            <Button onClick={handleRemoveCartItem} sx={{ color: 'rgb(145, 85, 253)' }}>
              Remove
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
>>>>>>> 5ce0153 (reinitialize)
