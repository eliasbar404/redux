import { createStore ,combineReducers} from "redux";
import CounterReducer from "./Reduces/CounterReduces"; 



const Reducers = combineReducers({
    "CounterReducer":CounterReducer,

});



const Store = createStore(Reducers);

export default Store;
