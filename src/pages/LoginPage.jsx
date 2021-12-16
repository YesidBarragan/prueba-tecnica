import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Button, TextField, FormControl } from "@mui/material";
import "./LoginPage.css"

export const LoginPage = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [userForm, setUserForm] = useState({
    email: ""
  });

  const onChangeHandler = async (e) => {
    await setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const userData = {
    email: "prueba@prueba.com"
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (userForm.email === userData.email) {
      localStorage.setItem("email", userData.email)
      localStorage.setItem("auth", true)
      auth.login().then(() => {
        navigate("/");
      })
    }else {
      alert("El usuario no coincide")
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="form-container">
        <FormControl>
          <TextField
            required 
            sx={{ mb: 2, mt: 2 }}
            id="standard-basic" 
            label="Email" 
            type="email"
            name="email"
            variant="standard"
            onChange={onChangeHandler} 
          />
          <Button type="submit" variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </FormControl>
      </div>
    </div>
  );
};
