import React, { useState, useContext, createContext } from "react";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [authed, setAuthed] = useState(false);
  
  const login = () => {
    return new Promise((res) => {
      setAuthed(true);
      res();
    });
  };
  const logout = () => {
    return new Promise((res) => {
      setAuthed(false);
      res();
    });
  };
  
  return {
    authed,
    login,
    logout
  };
}