import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'


const PaymentSuccessDone = () => {
  const navigate = useNavigate()

  return (
      <div className='fixed inset-0 flex items-center justify-center '>
        
          <div>
              <div className='flex items-center justify-center pb-8'>
                  
              <CheckCircleOutlineIcon color="success" sx={{ fontSize: 80 }}/>
              </div>
              <h1 className='text-3xl '> Order Placed Succcessfully </h1>
              <div className='flex items-center justify-center pt-8'>

              <Button
                          sx={{ mt: 2}}
                          size='large'
                      variant='contained'
                      onClick={()=>navigate('/')}
                  >Continue Shopping </Button>
                  </div>
              </div>
    </div>
  )
}

export default PaymentSuccessDone