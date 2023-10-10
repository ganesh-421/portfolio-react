import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
  onRegister: (name, email, password, confirmPassword) => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === 1) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    if (email === "ganesh410adhikari@gmail.com" && password === "12345678") {
      localStorage.setItem("isLoggedIn", 1);
      setIsLoggedIn(true);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const registerHandler = async (name, email, password) => {
    let data = {
      name: name,
      email: email,
      password: password,
    };
    const response = await fetch("http://127.0.0.1:8000/api/v1/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    data = await response.json();
    console.log(data);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        onRegister: registerHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
