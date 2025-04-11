import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getUser, login } from '../../state/Auth/Action';

const LoginForm = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const jwt = localStorage.getItem("jwt")
  // const {auth} = useSelector(store=>store)


  // useEffect(() => {
  //   if (jwt) {
  //     dispatch(getUser(jwt))
  //   }
  // },[jwt,auth.jwt])

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)

    const userData = {
      email:data.get("email"),
      password:data.get("password"),
      
    }
    dispatch(login(userData))
    console.log(userData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField 
              required
              id='email'
              name="email"
              label="Email"
              fullWidth
              autoComplete='email'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              id='password'
              name="password"
              type="password"
              label="Password"
              fullWidth
              autoComplete='password'
            />
          </Grid>
          <Grid item xs={12}>
            <Button color='primary' variant='contained' className='w-full' size='large' type='submit' sx={{padding:".8rem 0"}}>
              Log in
           </Button>
          </Grid>
        </Grid>

      </form>
      <div>
      <div className='flex py-3 justify-center'>
          <p>create new account</p>
          <Button onClick={() => navigate('/register')} className='ml-5' size='small'>Register</Button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm