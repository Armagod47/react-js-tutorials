// --------------SOMEWHAT SIMILAR EXAMPLE BY USESTATE--------------
import { useState } from "react";
import "./app.css";
export default function ExampleWithUseState() {
  const [count, setCount] = useState(0);
  const [para, setPara] = useState(true);
  const increment = () => {
    setCount(count + 1);
    setPara(!true);
  };
  return (
    <div className="eg-us">
      <p>Counter value : {count}</p>
      <button onClick={increment}>Click Me</button>
      {para && <p>Set Para is Set To True</p>}
    </div>
  );
}
