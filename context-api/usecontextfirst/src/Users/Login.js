import { useContext } from "react";
import { AppContext } from "../App";

const Login = () => {
  const ctx = useContext(AppContext);
  return (
    <div>
      <input onChange={(e) => ctx.setValue(e.target.value)} />
    </div>
  );
};

export default Login;
