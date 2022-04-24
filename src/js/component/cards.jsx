import React from "react";

const Cards = (props) => {
	return (
		<div className="card bg-dark text-light">
			<div className="card-body fs-1 mx-auto p-1">
				<div className="six">{props.digitsix}</div>
				<div className="five">{props.digitfive}</div>
				<div className="four">{props.digitfour}</div>
				<div className="three">{props.digitthree}</div>
				<div className="two">{props.digittwo}</div>
				<div className="one">{props.digitone}</div>
			</div>
		</div>
	);
};

export default Cards;
