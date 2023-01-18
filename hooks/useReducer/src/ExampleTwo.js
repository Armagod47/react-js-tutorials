import { useReducer } from "react";
import "./app.css";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "INCREASEBY":
      return {
        count: state.count + action.payload
      };
    default:
      return state;
  }
};

export default function ExampleTwo() {
  const initialValue = {
    count: 0
  };
  const [state, dispatch] = useReducer(reducer, initialValue);
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const increaseBy = () => {
    dispatch({ type: "INCREASEBY", payload: 5 });
  };
  return (
    <div className="eg-two">
      <p>Counter value : {state.count}</p>
      <button onClick={increment}>INCREASE</button>
      <button onClick={decrement}>DECREASE</button>
      <button onClick={increaseBy}>INC + 5</button>
    </div>
  );
}
