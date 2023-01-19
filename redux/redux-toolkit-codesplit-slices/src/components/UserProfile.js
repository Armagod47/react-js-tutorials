import React from 'react'
import { useDispatch } from "react-redux";
import {buttonActions} from '../store/buttonSlice';
import styles from './UserProfile.module.css';
import styleX from './Counter.module.css';
function UserProfile() {

  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(buttonActions.login());
  }
  return (
    <main className={styles.forms}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={styles.email}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={styles.password}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={styleX.buttons}>Login</button>
        </form>
      </section>
    </main>
  )
}

export default UserProfile;