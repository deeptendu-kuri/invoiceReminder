import React from "react";
import "./Header.css";
import Logo from "../../src/logo192.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navBar">
        <div className="left">
        <img
          src={Logo}
          alt="Company Logo"
          style={{ width: "50px", height: "50px" }}
        />
        </div>
        <div className="right">
          <ul style={{listStyle:"none",}}>
            <NavLink style={{ textDecoration: 'none',color: "inherit" }} to="/dashboard">
            <li>Dashboard</li>
            </NavLink>
            <NavLink style={{ textDecoration: 'none',color: "inherit" }} to="/">
            <li>Home</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
