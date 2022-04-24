import React from "react";
import Cards from "./cards.jsx";
//const [n1, toN1] = React.useState("0");

let num = 9;
let zeroPad = (num, places = 6) => String(num).padStart(places, "0");
let test = zeroPad(num).split("");

const SecondsCounter = () => {
	const [n1, setN1] = React.useState();
	for (; num > 0; num--) {
		setTimeout(() => {
			console.log(num);
			setN1(num);
		}, 1000);
	}

	return (
		<div className="bigCounter">
			<div className="calander">
				<i className="far fa-clock"></i>
			</div>
			<Cards digitsix={n1} />
			<Cards digitfive={test[1]} />
			<Cards digitfour={test[2]} />
			<Cards digitthree={test[3]} />
			<Cards digittwo={test[4]} />
			<Cards digitone={test[5]} />
		</div>
	);
};
let counter = 0;
// setInterval(function () {
// 	const four = math.floor(counter / 10000);
// 	const three = math.floor(counter / 1000);
// 	const two = math.floor(counter / 100);
// 	const one = math.floor(counter / 10);
// });
// ReactDOM.render(
//  <SecondsCounter digitone={counter.index0f()} />,
//  document.querySelector(`#app`)
// );

export default SecondsCounter;
