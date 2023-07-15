import { Link, NavLink } from "react-router-dom";
import React from "react";
function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "100px",
        height: "500px",
        margin: "0",
      }}
    >
      {/* <link to="/">HomePage</link>
      <link to="/about">AboutPage</link>
      <Link to="/users">UserPage</Link> */}

      <NavLink to="/">HomePage</NavLink>
      <NavLink to="/about">AboutPage</NavLink>
      <NavLink to="/users">UserPage</NavLink>
    </div>
  );
}

export default Navbar;
