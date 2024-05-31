import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';


const OrderDetails = () => {
  return (
      <div className='px:5 lg:px-20'>
          <div>
              <h1 className='font-bold text-xl py-7 '>Delivery Address</h1>

          <AddressCard />
          </div>
          <div className='py-20'>
              <OrderTracker activeStep={3 } />
          </div>

          <Grid className="space-x-5" container>
              {[1, 1, 1, 1, 1].map((item) =>
                <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: "space-between" }}>
                  <Grid item xs={6}>
                      <div className='flex cursor-pointer space-x-3'>
                          <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://5.imimg.com/data5/SELLER/Default/2023/9/343734510/QM/WO/GH/25637985/colored-plain-t-shirts.png' alt='image' />
                          <div className='ml-5 space-y-2'>
                          <p className='font-semibold'> Men Slim Mid Rise Black Jeans </p>
                          <p className=' text-xs font-semibold'>Size: M</p>
                              <p className='text-xs font-semibold'>Color: White</p>
                          <p className=' text-xs font-semibold'>₹199</p>
                              
                      </div>
                      </div>
                  </Grid>
                  <Grid item>
                      <Box sx={{ color: "Blue", cursor: "pointer"}}>
                          <StarBorderIcon sx={{fontSize:"1rem"}} className='ml-1' />
                          <span> Rate & Review Product</span>
                      </Box>
                  </Grid>
              </Grid>
              )}
              
          </Grid>
      </div>
      
  )
}

export default OrderDetails