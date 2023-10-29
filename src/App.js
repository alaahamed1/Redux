

import { useSelector, useDispatch } from 'react-redux';
import { deposite, withdraw } from './store/actions/bank_actions';
import Products from './components';



function App() {
  const state = useSelector(state => state.bank);
  const dispatch = useDispatch()
  return (
    <div className="app">
      <p>bank account balance : {state}</p>
      <button onClick={() => dispatch(withdraw(100))}>withdraw</button>
      <button onClick={() => dispatch(deposite(100))}>deposite</button>
      <Products/>
    </div>
  );
}

export default App;
