import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import {useSelector} from 'react-redux';
import Card from "./components/Card";
import styles from './App.module.css'
function App() {

  const res = useSelector(state => state.buttons.isLogged)
  return (
   <div className={styles.app}>
    <Counter/>
    {!res && <UserProfile/>}
    {res && <Card/>}
   </div>
  );
}

export default App;
