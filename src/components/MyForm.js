import React from "react";

class MyForm extends React.Component{
    constructor(){
        super();
        this.state = {
            text: ''
        }
    }

    //bo sung event
    handleOnChange = (e) => {
        this.setState({
            text: e.target.value}
        )
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        alert('Submitted text: ' + this.state.text)
        this.setState({
            text: ''}
        )
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" value={this.state.text} onChange={this.handleOnChange} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default MyForm;