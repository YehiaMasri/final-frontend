import React from "react";

const Loader = ({  isComponent }) => {
	return (
		<div className="container" style={{ height: isComponent && "100vh" }}>
			<div className="cup">
				<span className="steam"></span>
				<span className="steam"></span>
				<span className="steam"></span>
				<div className="cup-handle"></div>
			</div>
		</div>
	);
};

export default Loader;
