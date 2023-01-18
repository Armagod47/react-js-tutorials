import { useState, createContext } from "react";
import "./styles.css";
import Login from "./Users/Login";
import Username from "./Users/Username";

export const AppContext = createContext(null);

export default function App() {
  // GLobal State Which will be used app wide
  const [value, setValue] = useState("");
  return (
    <AppContext.Provider value={{ value, setValue }}>
      <div className="App">
        <Login />
        <Username />
      </div>
    </AppContext.Provider>
  );
}
