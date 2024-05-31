import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderCart = () => {
    const navigate = useNavigate()
  return (
      <div onClick={() => navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-grey hover:shadow-2xl border'>
          <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
              <Grid item xs={6}>
                  <div className='flex cursor-pointer'>
                      <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://5.imimg.com/data5/SELLER/Default/2023/9/343734510/QM/WO/GH/25637985/colored-plain-t-shirts.png' alt='image' />
                      <div className='ml-5 space-y-2'>
                          <p className=''> Men Slim Mid Rise Black Jeans </p>
                          <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                          <p className='opacity-50 text-xs font-semibold'>Color: White</p>
                      </div>
                  </div>
              </Grid>
              <Grid item xs={2}>
                  <p>₹199</p>
              </Grid>
              <Grid item xs={4}>
                  {true &&
                      <p> 
                          <span>Delivered On March 24</span>
                      </p>}
                  {false && <p>
                      <span>
                          Expected Delivery On March 29
                      </span>
                  </p>}
              </Grid>
          </Grid>
    </div>
  )
}

export default OrderCart