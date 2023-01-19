import React, { useState, useEffect, useReducer , useContext} from 'react';
import AuthContext from '../../store/auth-context';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {
      value: action.val,
      isValid : action.val.includes('@')
    }
  }
  if(action.type === 'INPUT_BLUR'){
    return {
      value: state.value,
      isValid : state.value.includes('@')
    }
  }
    return {
      value: '',
      isValid : false
    }
}

const passReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {
      value: action.val,
      isValid : action.val.trim().legth > 6
    }
  }
  if(action.type === 'INPUT_BLUR'){
    return {
      value: state.value,
      isValid : state.value.trim().legth > 6
    }
  }
    return {
      value: '',
      isValid : false
    }
}
const Login = (props) => {
  
  const [formIsValid, setFormIsValid] = useState(false);
  const authctx = useContext(AuthContext);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value:'', isValid: false});
  const [passState, dispatchPass] = useReducer(passReducer, {value:'', isValid: null});
  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT', val: event.target.value})

    setFormIsValid(
      event.target.value.includes('@') && passState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({type:'USER_INPUT', val : event.target.value})

    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
   dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPass({type:'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authctx.onLogin(emailState.value, passState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
           passState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
