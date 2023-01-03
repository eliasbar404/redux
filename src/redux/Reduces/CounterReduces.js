const mystate = {
    counter:20
}


const CounterReducer = (state=mystate,action)=>{

    switch(action.type){
        case 'Increment':
            return {counter:state.counter+action.payload.value}
        case 'Decrement':
            return {counter:state.counter-1}
        default:
            return state;
    }
}

export default CounterReducer;