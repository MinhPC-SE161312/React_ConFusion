import * as ActionTypes from './ActionTypes';

export const ageReducer=(state={},action)=>{
    switch(action.type){
        case ActionTypes.LOADDATA:
        return{
            description:action.payload
        }
        case ActionTypes.DISPLAYDATA:
        return{
            age: action.payload.age,
            name:action.payload.name,
            description:action.payload.description
        }
        default:
            return state;
    }
}