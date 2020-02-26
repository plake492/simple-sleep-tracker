import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      <NavLink className="btn" to="/">
        Timer
      </NavLink>
      <NavLink className="btn" to="/data">
        Data
      </NavLink>
    </div>
  );
}

export default Nav;
