import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../state/Auth/Action";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const jwt = localStorage.getItem("jwt"
  const { auth } = useSelector((store) => store);

  // useEffect(() => {
  //   if (jwt) {
  //     dispatch(getUser(jwt))
  //   }
  // },[jwt,auth.jwt])

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const userData = {
      firstName: data.get("firstname"),
      lastName: data.get("lastname"),
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(register(userData));
  };

  return (
  <div className="px-8 sm:px-6 md:px-10 lg:px-5 py-4">
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <TextField
        required
        id="firstname"
        name="firstname"
        label="First Name"
        fullWidth
        autoComplete="given-name"
      />
      <TextField
        required
        id="lastname"
        name="lastname"
        label="Last Name"
        fullWidth
        autoComplete="given-name"
      />
    </div>

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
        label="Password"
        fullWidth
        type="password"
        autoComplete="password"
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
        Register
      </Button>
    </div>
  </form>

  <div className="flex flex-col sm:flex-row items-center justify-center pt-6 gap-2">
    <p>Already have an account?</p>
    <Button
      onClick={() => navigate('/login')}
      size="small"
      className="ml-0 sm:ml-3"
    >
      Login
    </Button>
  </div>
</div>

  );
};

export default RegisterForm;
