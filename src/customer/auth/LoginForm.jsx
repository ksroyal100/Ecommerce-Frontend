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
 <div className="px-6 sm:px-6 md:px-10 lg:px-5 py-6">
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="w-full">
      <TextField
        required
        id="email"
        name="email"
        label="Email"
        fullWidth
        autoComplete="email"
      />
    </div>

    <div className="w-full">
      <TextField
        required
        id="password"
        name="password"
        type="password"
        label="Password"
        fullWidth
        autoComplete="current-password"
      />
    </div>

    <div className="w-full">
      <Button
        color="primary"
        variant="contained"
        className="w-full"
        size="large"
        type="submit"
        sx={{ padding: '.8rem 0' }}
      >
        Log in
      </Button>
    </div>
  </form>

  <div className="flex flex-col sm:flex-row items-center justify-center pt-6 gap-2">
    <p>Don't have an account?</p>
    <Button
      onClick={() => navigate('/register')}
      className="ml-0 sm:ml-3"
      size="small"
    >
      Register
    </Button>
  </div>
</div>

  )
}

export default LoginForm