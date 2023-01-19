// import React , {useState}from "react";

// // it creates context object
// const AuthContext = React.createContext({
//     isLoggedIn : false,
//     onLogout : () => {}
// });
// const AuthContextProvider = (props) => {
//     return <AuthContext.Provider>{props.children}</AuthContext.Provider>
// }
// export default AuthContext;

// MANAGING CONTEXT IN ONE PLACE
import React, { useState, useEffect } from "react";

// it creates context object
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});
export const AuthContextProvider = (props) => {
  // Managing/Pulling/Removing AUthentication process from App.js, for cleaner code management
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
