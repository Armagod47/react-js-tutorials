import React, {useContext} from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';
const Navigation = () => {
  const ctx =  useContext(AuthContext);
  return (
    // Using useContext hook
    <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={ctx.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>




    // Using Consumer Method
    // <AuthContext.Consumer>
    //   {/* AuthContext.COnsumer takes one fn and it takes context object and returns jsx with access to the context data */}
    //   {(ctx) => {
    //     return (
    //       <nav className={classes.nav}>
    //         <ul>
    //           {/* Using context object , instead of props.isLoggedIn we will use ctx.isLoggedIn*/}
    //           {ctx.isLoggedIn && (
    //             <li>
    //               <a href="/">Users</a>
    //             </li>
    //           )}
    //           {ctx.isLoggedIn && (
    //             <li>
    //               <a href="/">Admin</a>
    //             </li>
    //           )}
    //           {ctx.isLoggedIn && (
    //             <li>
    //               <button onClick={props.onLogout}>Logout</button>
    //             </li>
    //           )}
    //         </ul>
    //       </nav>
    //     )
    //   }}
      
    // </AuthContext.Consumer>
  );
};

export default Navigation;
