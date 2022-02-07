import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

window.header.get('./Header').then(data=>{
    const Header = data().default;
    new Header({
      target: document.getElementById("header"), //id header berada di index.html
    });
  })

const App = () => <div><div>Hi there, I'm React from Webpack 5.</div>
<button onClick={()=> window.IncNumber()}>Inc Number from React !!!</button></div> ;

ReactDOM.render(<App />, document.getElementById("app"));
