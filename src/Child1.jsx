import React from 'react';
import './style/Child1.css';
import Child2 from './Child2';

const Child1 = ({counter,Increment,Decrement}) => {
    return (
    <div className='child1'>
        <h1>Child1 Stage</h1>
        <Child2 counter={counter} Increment={Increment} Decrement={Decrement}/>
    </div>
)
}

export default Child1