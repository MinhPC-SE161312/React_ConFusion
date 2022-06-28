import { createStore } from "redux";
import { Reducer } from "./Reducer";

export const ConfigureStore2=()=>{
    const store=createStore(Reducer);
    return store;
}