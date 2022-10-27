import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux"

function App() {
  //we are returning the state inside of the store
  //const state = useSelector(state => state.state)
  const account = useSelector((state) => state.account)

  return (
    <div className="App">

    </div>
  );
}

export default App;
