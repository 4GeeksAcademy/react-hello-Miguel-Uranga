import React from "react";



const Card = (props) => {
	return (
		<>
            <div className="col">
                <div className="card m-2 align-top h-100">
                    <img src={props.imageURL} className="card-img-top" alt="Lorem Ipsum"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                    </div>
                    <div className="card-footer align-bottom">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
			
		</>
	);
};



export default Card;