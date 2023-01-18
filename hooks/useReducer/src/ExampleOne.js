import { useReducer } from "react";
import "./app.css";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        para: !state.para
      };
    default:
      return state;
  }
};

export default function ExampleOne() {
  const initialValue = {
    count: 0,
    para: true
  };
  const [state, dispatch] = useReducer(reducer, initialValue);
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  return (
    <div className="eg-one">
      <p>Counter value : {state.count}</p>
      <button onClick={increment}>Click Me</button>
      {state.para && <p>Set Para is Set To True</p>}
    </div>
  );
}
