import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentSuccess = () => {
  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
      <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
      <div className="space-y-4">
        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"  onClick={()=>navigate('/api/payments/done')}> 
          Cash On Delivery
        </button>
        <button className="w-full py-2 px-4 bg-green-500 text-white line-through rounded hover:bg-green-600">
         UPI
        </button>
        <button className="w-full py-2 px-4 bg-yellow-500 text-white line-through rounded hover:bg-yellow-600">
          Credit /Debit / ATM Card
        </button>
      </div>
      <button
        className="mt-4 w-full py-2 px-4 bg-red-500 text-white line-through rounded hover:bg-grey-400"
      >
        Net Banking
      </button>
    </div>
  </div>

  )
}

export default PaymentSuccess