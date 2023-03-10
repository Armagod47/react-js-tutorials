// import React, { useState, useEffect } from 'react';
// import AuthContext from './store/auth-context';
// import Login from './components/Login/Login';
// import Home from './components/Home/Home';
// import MainHeader from './components/MainHeader/MainHeader';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

//     if (storedUserLoggedInInformation === '1') {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways
//     localStorage.setItem('isLoggedIn', '1');
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('isLoggedIn');
//     setIsLoggedIn(false);
//   };

//   return (
//     <React.Fragment>
//       {/*AuthCOntext.Provider is a component  we can use in our jsx, and wrap it around other component. Those all component and their children will have access to the context*/}
//       <AuthContext.Provider value={{isLoggedIn : isLoggedIn,
//       onLogout : logoutHandler}}>
//       <MainHeader  />
//       <main>
//         {!isLoggedIn && <Login onLogin={loginHandler} />}
//         {isLoggedIn && <Home onLogout={logoutHandler} />}
//       </main>
//       </AuthContext.Provider>
//     </React.Fragment>
//   );
// }

// export default App;


// MANAGING CONTEXT IN ONE PLACE IN AUTHCONTEXT

import React, { useContext } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
     
      <MainHeader  />
      <main>
        {!ctx && <Login />}
        {ctx && <Home/>}
      </main>

    </React.Fragment>
  );
}

export default App;