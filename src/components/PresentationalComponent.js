import React from "react";

function PresentationalComponent(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default PresentationalComponent;