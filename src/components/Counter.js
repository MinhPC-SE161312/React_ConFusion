import React from "react";
import {connect} from 'react-redux';

const mapStateToProps=(state)=> {
    return {
        count: state.count
    }
}

class Counter extends React.Component{
    constructor(props){
        super(props);
    }

    incre=()=>{
        this.props.dispatch({ type:"INCRE"});
    }
    decre=()=>{
        this.props.dispatch({ type:"DECRE"});
    }

    render(){
        return(
            <div>
                <h2>Counter</h2>
                <button onClick={this.decre}>-</button>
                <span>{this.props.count}</span>
                <button onClick={this.incre}>+</button>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Counter);