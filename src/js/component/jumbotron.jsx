import React from "react";

const newStyles = {
    "backgroundColor": "AliceBlue" 
}

const JumboTron = (props) => {
	return (
		<>
			<div className="card m-2" style={newStyles}>
            <div className="card-body">
                <h1 className="card-title">{props.title}</h1>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Call to action!</a>
            </div>
            </div>
		</>
	);
};



export default JumboTron;