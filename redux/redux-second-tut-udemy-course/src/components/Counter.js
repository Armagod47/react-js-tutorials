import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {
  // useselector gets access to slices of state, like the ones which we actually want to use.
  // useselector automatically sets subscription for the following component in which it is used
  // and it also takes care of mounting and unmounting of components
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const dispatch = useDispatch();

  // const incrementHandler = () => {
  //   dispatch({type: 'increment'});
  // }
  // const increaseHandler = () => {
  //   dispatch({type: 'increase',
  // amount: 5});
  // }
  // const decrementHandler = () => {
  //   dispatch({type: 'decrement'});
  // }
  // const toggleCounterHandler = () => {
  //   dispatch({type:'toggle'})
  // };

  const incrementHandler = () => {
      dispatch(counterActions.increment());
    }
    const decrementHandler = () => {
      dispatch(counterActions.decrement());
    }
    const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter());
    }
    const increaseHandler = () => {
      dispatch(counterActions.increase(10));
      // {type: some_unique_identifier, payload: 10} done default by redux toolkit
    }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
