import {createStore, combineReducers} from "redux";
import {composeWithDevTools}from "redux-devtools-extension"
import { counterReducer } from "./Reducers/counterReducer";
import { todoReducers } from "./Reducers/todoreducers";

const composedEnhancer =composeWithDevTools();

const store=createStore(
combineReducers({
    counter:counterReducer,
    todo:todoReducers,
    
}),
    
    composedEnhancer
);

    

export default store;