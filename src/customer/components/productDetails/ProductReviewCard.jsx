import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
      <div>
          <Grid container spacing={2} gap={3}>
              <Grid item xs={2}>
                  <Box>
                      <Avatar className='text-white ' sx={{ width: 56,height:56,bgcolor:"#9155fd"}}>R</Avatar>
                  </Box>
              </Grid>
              <Grid className='flex flex-col mr-6' item xs={9} >
                  <div className='space-y-2'>
                      <div>
                          <p className='font-semibold text-lg'>Ram</p>
                          <p className='opacity-70'>April 5,2024</p>
                      </div>
                  </div>

                  <Rating value={4.5} readOnly precision={.5} name='half-rating' />
                  <p>Nice product , ilove this shirt </p>
              </Grid>
          </Grid>
    </div>
  )
}

export default ProductReviewCard