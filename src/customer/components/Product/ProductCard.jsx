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
     <div onClick={handleNavigate} className="productCard w-full bg-white rounded shadow hover:shadow-md transition p-2">
  <div className="aspect-[2/4] overflow-hidden">
    <img className="w-full h-full object-cover object-center" alt="product" src={product.imageUrl} />
  </div>
  <div className="p-2">
    <p className="font-bold text-gray-500">{product.brand}</p>
    <p className="truncate">{product.title}</p>

    <div className="flex items-center gap-2 mt-1">
      <p className="font-semibold text-black">₹{product.discountedPrice}</p>
      <p className="line-through text-sm text-gray-400">₹{product.price}</p>
      <p className="text-green-600 font-semibold text-sm">{product.discountPersent}% off</p>
    </div>
  </div>
</div>

  )
}

export default ProductCard