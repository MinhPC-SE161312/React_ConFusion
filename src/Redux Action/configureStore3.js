import {createStore} from 'redux';
import {ageReducer} from './ageReducer';

export const initState={
    name:'van than',
    age:18,
    description:''
}

export const ConfigureStore3=()=>{
    const store=createStore(ageReducer, initState);
    return store;
}