import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({ product }) => {

    const { title, brand, imageUrl, price, discountedPrice, color, discountPersent } = product
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/product/${product?._id}`)
    }
  return (
      <div onClick={handleNavigate} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
          <div className='h-[20rem]'>
              <img className='h-full w-full object-cover object-left-top' alt='are' src={product.imageUrl} />
          </div>
          <div className='textPart bg-white p-3'>
              <div>
                  
                  <p className='font-bold opacity-60'>{product.brand }</p>
                  <p>{ product.title}</p>
              </div>
              <div className='flex items-center space-x-2 justify-start'>

                  <p className='font-semibold'>{ product.discountedPrice}</p>
                  <p className='line-through opacity-50'>{ product.price}</p>
                  <p className=' text-green-600 font-semibold'>{ product.discountPersent}% off</p>
                  
              </div>
          </div>
          
      </div>
  )
}

export default ProductCard