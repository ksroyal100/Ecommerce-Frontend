import { Grid, Button, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
      <div>
          <Grid className='bg-black text-white text-center mt-10'
              container
              sx={{bgcolor:"black", color: "white", py:3}} 
          >
              <Grid item xs={12} sm={6} md={3}>
                  <Typography className='pb-5' variant='h5'>{""}Company</Typography>
                  <div>
                  <Button className='pb-5' variant='h6' gutterbottom>{""}About</Button>
                  </div>
                  <div>
                  <Button className='pb-5' variant='h6' gutterbottom>{""}Blog</Button>
                  </div>
                  <div>
                  <Button className='pb-5' variant='h6' gutterbottom>{""}Press</Button>
                  </div>
                  <div>
                  <Button className='pb-5' variant='h6' gutterbottom>{""}Jobs</Button>
                  </div>


              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                  <Typography className='pb-5' variant='h5'>{""}Solutions</Typography>
                  <div>
                  <Button className='pb-5' variant='h6' gutterbottom>{""}Marketing</Button>
                  </div>
                  <div>
                  <Button className='pb-5' variant='h6' gutterbottom>{""}Analytics</Button>
                  </div>
                  <div>
                  <Button className='pb-5' variant='h6' gutterbottom>{""}Commerce</Button>
                  </div>
                  <div>
                  <Button className='pb-5' variant='h6' gutterbottom>{""}Insights</Button>
                  </div>
                  <div>
                  <Button className='pb-5' variant='h6' gutterbottom>{""}Supports</Button>
                  </div>


              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                  <Typography className='pb-5' variant='h5'>{""}Documentation</Typography>
                  <div>
                      <Button className='pb-5' variant='h6' gutterbottom>{""} Api Status</Button>
                  </div>
                  <div>
                  <Button className='pb-5' variant='h6' gutterbottom>{""}Guide</Button>
                  </div>


              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                  <Typography className='pb-5' variant='h5'>{""}Legal</Typography>
                  <div>
                  <Button className='pb-5' variant='h6' gutterbottom>{""}Privacy</Button>
                  </div>
                  <div>
                  <Button className='pb-5' variant='h6' gutterbottom>{""}Terms</Button>
                  </div>
                  <div>
                      <Button className='pb-5' variant='h6' gutterbottom>{""}
                      Claim</Button>
                  </div>

              </Grid>

          </Grid>
          <Grid className='bg-black text-white mt-20' item xs={12}>
              <Typography variant='body2' component="p" align='center'>
                  &copy; 2023 My Company. All Rights Reserved.
              </Typography>
          </Grid>
    </div>
  )
}

export default Footer