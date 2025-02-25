import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="navbar">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.shutterstock.com/image-vector/college-logo-design-template-vector-600nw-2312781315.jpg"
          alt="College Logo"
        />
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/departments">Departments</Link></li>
          <li><a href="#contact-footer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
