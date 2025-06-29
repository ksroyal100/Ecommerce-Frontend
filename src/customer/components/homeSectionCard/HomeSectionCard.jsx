import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
     <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-[15rem] border border-gray-300 mx-auto">
  <div className="w-full sm:w-[10rem] h-[13rem]">
    <img
      className="object-cover object-top w-full h-full"
      src={product.imageUrl}
      alt={product.title}
    />
  </div>

  <div className="p-4 text-center">
    <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
    <p className="mt-2 text-sm text-gray-600">{product.title}</p>
  </div>
</div>

  )
}

export default HomeSectionCard