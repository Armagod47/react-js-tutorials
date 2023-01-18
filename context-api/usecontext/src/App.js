import { useState } from "react";
import "./styles.css";
import Login from "./UserFiles/Login";
import Username from "./UserFiles/Username";

export default function App() {
  // GLobal State Which will be used app wide
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <Login setName={setValue} />
      <Username userName={value} />
    </div>
  );
}
