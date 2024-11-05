import React from "react";

const newStyles = {
    width: "13rem", 
    display:"inline-block", 
}

const NavBar = (props) => {
	return (
		<>
            <nav className="navbar navbar-expand-lg bg-secondary d-flex justify-content-center">
                <div className="container-fluid text-center">
                    <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
		</>
	);
};

export default NavBar;