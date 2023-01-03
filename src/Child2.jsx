import React from 'react';
import './style/Child1.css';
import { useSelector ,useDispatch} from 'react-redux';


const Child2 = () => {
    
    const dispatch = useDispatch();
    const counter = useSelector((state)=>state.CounterReducer.counter)
    const Increment = ()=>{
        const action = {
          type:'Increment',
          payload:{
            name:'ldld'
          },
        }
        dispatch(action);
      }
    

    return (
    <div className='child2'>
        <h1>Child2 Stage</h1>
      {/* counter */}
        <div>
            <button className='button' > - </button>
            <span className='span'>{counter}</span>
            <button className='button' onClick={(e)=>Increment()}> + </button>
        </div>
    </div>
)
}

export default Child2