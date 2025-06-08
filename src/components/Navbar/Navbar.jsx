import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="./src/assets/logo.png" id="logo" alt="logo" />
        <h1>Fork & Flames</h1>
      </div>

      <ul className="navbar-bw">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/book" className={({ isActive }) => isActive ? "active" : ""}>
            Book a Table
          </NavLink>
        </li>
        <li>
          <NavLink to="/special-events" className={({ isActive }) => isActive ? "active" : ""}>
            Special Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
