import React from 'react';
import './style/App.css';
import Child1 from './Child1';
import { useSelector ,useDispatch} from 'react-redux';



function App() {

  const dispatch = useDispatch();

  const counter = useSelector((state)=>state.CounterReducer.counter)

  const Increment = ()=>{
    const action = {
      type:'Increment',
      payload:{},
    }
    dispatch(action);
  }

  const Decrement = ()=>{
    const action = {
      type:'Decrement',
      payload:{},
    }
    dispatch(action);
  }


  return (
    <div className="App">
      <h1>App stage</h1>
      {/* counter */}
      <div>
          <button className='button' onClick={(e)=>Decrement()}> - </button>
          <span className='span'>{counter}</span>
          <button className='button' onClick={(e)=>Increment()}> + </button>
      </div>

      <Child1 />

    </div>
  );
}
// counter={counter} Increment={Increment} Decrement={Decrement}
export default App;
