import React from "react";
import { connect } from "react-redux";
import { increaseAge, decreaseAge } from "./ActionCreator";

import * as ActionTypes from './ActionTypes';
const mapStateToProps=state=>{
    return{
        name: state.name,
        age: state.age,
        description: state.description
    }
}

class TestComponent extends React.Component{
    constructor(props){
        super(props);
    }
    incre=()=>{
        this.props.dispatch(increaseAge('testing increaseAge'))
    }
    decre=()=>{
        this.props.dispatch(decreaseAge('testing decreaseAge'))
    }
    render(){
        return(
            <div>
                <h3>Your name: {this.props.name}</h3>
                <h3>Your age: </h3>
                <button onClick={this.decre}>-</button>
                {this.props.age}
                <button onClick={this.incre}>+</button>
                <h4>{this.props.description}</h4>
            </div>
        );
    }
}

export default connect(mapStateToProps)(TestComponent);