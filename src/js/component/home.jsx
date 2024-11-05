import React from "react";
import Card from "./card.jsx";
import JumboTron from "./jumbotron.jsx";
import NavBar from "./navbar.jsx"


const homeStyle = {
	width: "70%",
	height: "75vh"
}
//create your first component
const Home = () => {
	return (
		<>
			<div className = "justify-content-center">
				<NavBar />
				</div>
			
			<div className = " container-fluid" style = {homeStyle}>
				
				<JumboTron title= "A Warm Welcome!" text = "Nam at mauris euismod, molestie tortor at, bibendum libero. Etiam lacinia vulputate ultrices. Aenean ac vehicula ligula, sit amet bibendum urna. Suspendisse ultrices fringilla rhoncus. Nam blandit nulla id mi congue, at tincidunt nisi placerat. Proin eget nisi velit. Etiam vitae nisi orci. Nunc elementum, erat et faucibus ornare, sapien ipsum mattis nunc, porttitor eleifend justo ante a velit. Praesent ut tincidunt dolor."/>

				<div className="row row-cols-1 row-cols-md-4 g-4 text-center">
					<Card title = "Lorem Ipsum" imageURL = "https://picsum.photos/536/354" text = "In bibendum faucibus ex eget cursus. Integer euismod mauris nec lectus vehicula finibus. Ut posuere sodales orci a aliquet. Proin a mauris et enim facilisis ullamcorper."/>
					<Card title = "Lorem Ipsum" imageURL = "https://picsum.photos/536/354" text = "Cras ut ultrices urna. Nam ultricies ac purus vel mattis. Sed eu bibendum mauris. Donec sed felis nec nulla luctus bibendum sed nec massa. Quisque et ligula augue. "/>
					<Card title = "Lorem Ipsum" imageURL = "https://picsum.photos/536/354" text = "Cras ut ultrices urna. Nam ultricies ac purus vel mattis. Sed eu bibendum mauris. Donec sed felis nec nulla luctus bibendum sed nec massa. Quisque et ligula augue."/>
					<Card title = "Lorem Ipsum" imageURL = "https://picsum.photos/536/354" text = "Lorem Ipsum"/>
					
				</div>
				
			</div>
		</>
	);
};

export default Home;
