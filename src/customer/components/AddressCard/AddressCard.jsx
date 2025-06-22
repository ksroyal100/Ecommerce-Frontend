import React from 'react'

const AddressCard = ({address}) => {
  return (
      <div>
         <div className="space-y-3">
        <p className="font-semibold">{`${address?.firstName.charAt(0).toUpperCase() +address?.firstName.slice(1)} ${address?.lastName}`}</p>

        <p>
          {`${address?.streetAddress.charAt(0).toUpperCase() +address?.streetAddress.slice(1)} ${address?.city} ${address?.state} ${address?.zipcode}`} 
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
      </div>
  )
}

export default AddressCard