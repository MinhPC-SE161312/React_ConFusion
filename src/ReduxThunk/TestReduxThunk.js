import React from "react";
import { connect } from "react-redux";
import { loading } from "./ActionCreator";

const mapStateToProps=state=>{
    return{
        name: state.name,
        age: state.age,
        description: state.description
    }
}

class TestReduxThunk extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.dispatch(loading());
    }

    render(){
        return(
            <div className="m-5">
                <span className="fa fa-spinner fa-pulse fa-3x text-primary"></span>
                <h4>{this.props.description}</h4>
                <h4>{this.props.name}</h4>
                <h4>{this.props.age}</h4>
            </div>
        );
    }
}

export default connect(mapStateToProps)(TestReduxThunk);