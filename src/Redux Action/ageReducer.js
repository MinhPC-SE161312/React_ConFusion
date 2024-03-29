import * as ActionTypes from './ActionTypes';
import {initState} from './configureStore3';

export const ageReducer=(state=initState, action)=>{
    switch(action.type){
        case ActionTypes.INCREMENT:
            return{
                age: state.age+1,
                name:state.name,
                description: action.payload
            }

        case ActionTypes.DECREMENT:
            return{
                age: state.age-1,
                name:state.name,
                description: action.payload
            }

        default:
            return state;
    }
}