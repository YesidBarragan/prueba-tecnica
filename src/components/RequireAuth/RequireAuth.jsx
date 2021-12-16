import React from "react";
import { Navigate } from "react-router-dom";
//import {useAuth} from "../../hooks/useAuth";

export const RequireAuth = ({ children }) => {

  // const { authed } = useAuth();

  return JSON.parse(localStorage?.getItem("auth")) === true ? children : <Navigate to="/login" replace/>
}