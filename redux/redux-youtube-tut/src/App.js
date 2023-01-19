import { useSelector, useDispatch } from "react-redux/es/exports";
import { increment } from "./actions";
import { decrement } from "./actions";
const App = () => {
  const Counter = useSelector(state => state.counter);
  const loggers = useSelector(state => state.isLog);
  const dispatch = useDispatch();
  return ( <div>
    <h1>{Counter}</h1>
    <button onClick={() => dispatch(increment(10))}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
    {!loggers && <h1>Not Logged In</h1> }
  </div> );
}
 
export default App;<div>Hello World</div>