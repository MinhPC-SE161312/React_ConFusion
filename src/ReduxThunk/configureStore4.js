import { createStore, applyMiddleware } from "redux";
import { ageReducer } from "./ageReducer";
import thunk from 'redux-thunk';

export const ConfigureStore4=()=>{
    const store=createStore(ageReducer,applyMiddleware(thunk));
    return store;
}