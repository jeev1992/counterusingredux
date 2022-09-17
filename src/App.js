import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {
  decrement,
  increment,
  reset,
  logIn,
  logOut
} from './actions/index'


//dispatch, state-> counter and auth to display in JSX, actions
function App() {
  const counter = useSelector((state) => state.counterReducer)
  const auth = useSelector((state) => state.authReducer)
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>Redux project</h1>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>

      <h2>For logged in users only</h2>
      <p>Log in to see a secret!!!</p>
      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      {auth ? (<div>
        <p>If you know 50% of Redux, you're a pro!!</p>
        </div>) : ("")}
    </div>
  );
}

export default App;
