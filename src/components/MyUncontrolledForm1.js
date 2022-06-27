import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Form, Input} from 'reactstrap';

class MyUncontrolledForm1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isCase: false
        }
        this.changeIsCase=this.changeIsCase.bind(this);
    }

    changeIsCase(){
        const value=this.inputText.value;
        this.setState({isCase:!this.state.isCase});
        if(this.state.isCase) this.inputText.value=value.toUpperCase();
        else this.inputText.value=value.toLowerCase();
    }

    render(){
        return(
            <div className="container">
                <h4>innerRef</h4>
                <div className="row m-5">
                    <div className="col-2 col-sm-2">
                        <form>
                            <p><input type="text" ref={inputControl=>this.inputText=inputControl} placeholder="input a text"/> </p>
                            <p><input type="button" onClick={this.changeIsCase} value="toggle case" className="btn-success"/> </p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyUncontrolledForm1;