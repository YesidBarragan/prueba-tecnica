import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "@mui/material";
import "./NavBar.css";

export const NavBar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout().then(() => {
      localStorage.removeItem("email")
      localStorage.removeItem("auth")
      navigate("/login");
    });
  };

  return (
    <nav className="nav-bar">
      <ul>
        <li>
          {localStorage.getItem("email") && <p>{localStorage.getItem("email")}</p>}
        </li>
        <li>
          {JSON.parse(localStorage.getItem("auth")) && (
            <Button variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </li>
      </ul>
    </nav>
  );
};
