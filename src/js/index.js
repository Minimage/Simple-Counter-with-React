//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Example from "./component/test";

//render your react application
ReactDOM.render(<Example />, document.querySelector("#app"));
