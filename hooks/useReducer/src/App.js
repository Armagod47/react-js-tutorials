import ExampleOne from "./ExampleOne";
import ExampleTwo from "./ExampleTwo";
import ExampleWithUseState from "./ExampleWithUseState";
import "./app.css";
export default function App() {
  return (
    <div className="cards-wrapper">
      <div className="cards">
        <h3>Similar Functionality Using useState Hooks</h3>
        <ExampleWithUseState />
      </div>
      <div className="cards">
        <h3>Example Using useReducer Hooks</h3>
        <ExampleOne />
      </div>
      <div className="cards">
        <h3>Example Using useState Hooks with payload</h3>
        <ExampleTwo />
      </div>
    </div>
  );
}
