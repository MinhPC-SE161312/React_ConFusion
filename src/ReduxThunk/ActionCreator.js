import * as ActionTypes from './ActionTypes';

export const loaddata = (text) => {
    return{
        type: ActionTypes.LOADDATA,
        payload:text
    }
};

export const displaydata = (data) => {
    return{
        type: ActionTypes.DISPLAYDATA,
        payload:data
    }
};

export const loading = () => (dispatch) => {
    dispatch(loaddata('is loading ........'));
    setTimeout( ()=>{
        dispatch(displaydata({name:'van', age:18, description:'display data'}))
    }   ,2000);
};

