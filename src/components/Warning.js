import React from 'react';

class Warning extends React.Component{

	// constructor(){
	// 	super();
	// 	this.display=this.display.bind(this);
	// }

	// display(){
	// 	alert('Welcome to handling event');
	// }

	// render(){
	// 	return(
	// 		<button onClick={this.display}>Click me</button>
	// 	);
	// }

	constructor(){
		super();
	}
	display=(msg)=>{
		alert(msg);
	}
	render(){
		return(
			<button onClick={() =>this.display("yeu co")}>Click me</button>
		);
	}
}

export default Warning;