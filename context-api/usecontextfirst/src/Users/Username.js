import { useContext } from "react";
import { AppContext } from "../App";
const Username = () => {
  const ctx = useContext(AppContext);
  return <div>My Name Is : {ctx.value}</div>;
};

export default Username;
