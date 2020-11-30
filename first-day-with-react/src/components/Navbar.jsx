import React from "react";
import logo from "../logo.svg";

function Navbar() {
  return (
    <nav>
      <img
        src={logo}
        style={{ width: "50px", height: "50px" }}
        className="App-logo"
        alt=""
      />
    </nav>
  );
}

export default Navbar;
