import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";
import styles from './Counter.module.css';
const Counter = () => {
// Selecting inividiual states from store/index.js(counter)/counter.js(counter)
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const btnHandler = () => {
    dispatch(counterActions.increase());
  };
  const btnIncHandler = () => {
    dispatch(counterActions.increaseByParams(10));
    // {type: some_unique_identifier, payload: 10} done default by redux toolkit
  };

  const clearHandler = () => {
    dispatch(counterActions.clearState());
  }
  return (
    <div className={styles.counter}>
      <p className={styles.textCounter}>{counter}</p>
      <button onClick={btnHandler} className={styles.buttons}>Increment</button>
      <button onClick={btnIncHandler} className={styles.buttons}>Increase By 10</button>
      <button onClick={clearHandler} className={styles.buttons}>Clear</button>
    </div>
  );
};

export default Counter;