import { Button, Grid, TextField } from '@mui/material'
import React, {useState} from 'react'
import AddressCard from '../AddressCard/AddressCard'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../../state/Order/Action';



const DeliveryAddressForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const jwt = localStorage.getItem("jwt");
    const { auth } = useSelector((store) => store);
    const [selectedAddress, setSelectedAdress] = useState(null);
 
//   console.log("auth", auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get("firstname"),
            lastName:data.get("lastname"),
            streetAddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zip:data.get("zip"),
            phone:data.get("phone"),
            
        }
        const orderData = { address,jwt, navigate }
        dispatch(createOrder(orderData))
        // console.log("address", orderData)
        // handleNext()

    }

  return (
      <div>
        

              <Grid item xs={12} lg={7}>
                  <Box className="border rounded-s-md shadow-md p-5">
                      <form onSubmit={handleSubmit}>
                          <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                              <TextField required id='firstname' name='firstname' label="First Name" fullWidth autoComplete='given-name' />
                             
                          </Grid>
                          <Grid item xs={12} sm={6}>
                              <TextField required id='lastname' name='lastname' label="Last Name" fullWidth autoComplete='given-name' />
                             
                              </Grid>
                              <Grid item xs={12}>
                              <TextField required id='address' name='address' label="Address" fullWidth autoComplete='given-name'  multiline rows={4}/>
                             
                              </Grid>
                              <Grid item xs={12} sm={6}>
                              <TextField required id='city' name='city' label="City" fullWidth autoComplete='given-name' />
                             
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                  <TextField required id='state' name='state' label="State/Province/Region" fullWidth autoComplete='given-name' />
                                  </Grid>
                              <Grid item xs={12} sm={6}>
                                  <TextField required id='zip' name='zip' label="Zip Code" fullWidth autoComplete='shipping postal-code' />
                                  </Grid>
                              <Grid item xs={12} sm={6}>
                              <TextField required id='phone' name='phone' label="Phone / Mobile No." fullWidth autoComplete='given-name' />
                             
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                  <Button sx={{ mt: 2 }} size='large' variant='contained' type='submit'> Deliver Here</Button>
                             
                              </Grid>
                              </Grid>
                      </form>
              </Box>
                  
              </Grid>
        
    </div>
  )
}

export default DeliveryAddressForm