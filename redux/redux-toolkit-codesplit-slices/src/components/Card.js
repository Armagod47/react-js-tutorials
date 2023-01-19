import React from 'react'
import {useDispatch} from 'react-redux';
import {buttonActions} from '../store/buttonSlice';
import styleX from './Counter.module.css';
import styles from './UserProfile.module.css';
function Card() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(buttonActions.logout());
    }
  return (
    <div className={styles.forms}>
        <h2 className={styleX.textCounter}>Login Success!!! Hurray</h2>
        <button onClick={logoutHandler} className={styleX.buttons}>Logout</button>
    </div>
  )
}

export default Card