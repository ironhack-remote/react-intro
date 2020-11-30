// const React = require("react")
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const name = "Dimitri";

// backgroundColor:"red"
const element = (
  <div>
    <nav></nav>
    <div className="hello">
      <h1 style={{ backgroundColor: "red" }}>Hello {name}</h1>
    </div>
    <label htmlFor="banana"></label>
  </div>
);

function App(args) {
  console.log("args:", args);
  return (
    <div className="App">
      <h1 name="marta">This is my app</h1>
      <SayHi name="marta" />
      <Element />
      <Element />
      <Element />
    </div>
  );
}

function SayHi(props) {
  return <h1>Hi {props.name}</h1>;
}

class Element extends React.Component {
  render() {
    return (
      <div>
        <nav></nav>
        <div className="hello">
          <h1 style={{ backgroundColor: "red" }}>Hello {name}</h1>
        </div>
        <label htmlFor="banana"></label>
      </div>
    );
  }
}
// const Element = () => {
//   return (
//     <div>
//       <nav></nav>
//       <div className="hello">
//         <h1 style={{ backgroundColor: "red" }}>Hello {name}</h1>
//       </div>
//       <label htmlFor="banana"></label>
//     </div>
//   );
// };

/* const h1 = document.createElement("h1");
h1.style.backgroundColor = "red";
h1.innerText = `Hello ${name}`;
const thatDiv = document.querySelector("hello");
thatDiv.appendChild(h1); */

ReactDOM.render(<App />, document.querySelector("#root"));
