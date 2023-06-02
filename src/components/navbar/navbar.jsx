import React from "react";
import { useState } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import logo from "../../asset/images/28499fe0c116f1d47567709cd86e5081.png";
import logo1 from "../../asset/images/304977202_599891048488227_4165140898872860292_n-removebg-preview-removebg-preview.png";

function Navbar(props) {
  const [Mobile, setMobile] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="containerr">
          <NavLink to="/">
            {/* <img
              className="logo ml-16"
              src={logo1}
              width="230"
              height="170"
              alt="logo"
            /> */}
          </NavLink>
          <ul
            className={Mobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}
          >
            <NavLink className="a" to="/">
              <li className="li">Home</li>
            </NavLink>
            <NavLink className="a" to="/products">
              <li className="li">Products</li>
            </NavLink>
            <NavLink className="a" to="/menu">
              <li className="li">Menu</li>
            </NavLink>
            <NavLink className="a" to="/entertainment">
              <li className="li">Entertainment</li>
            </NavLink>
            {!Mobile && (
              <NavLink className="a" to="/">
                <li className="li">
                  <img src={logo} alt="logo" />
                </li>
              </NavLink>
            )}
            <NavLink className="a" to="/about">
              <li className="li">About-Us</li>
            </NavLink>
            <NavLink className="a" to="/contact">
              <li className="li">Contact-Us</li>
            </NavLink>
            <div className="registration">
              <NavLink className="a" to="/login">
                <li className="li">Login</li>
              </NavLink>
              <NavLink className="a" to="/register">
                <li className="li">Register</li>
              </NavLink>
            </div>
          </ul>
          <button
            className="mobile-menu-icon"
            onClick={() => setMobile(!Mobile)}
          >
            {Mobile ? (
              <ImCross color="var(--accent1)" />
            ) : (
              <FaBars color="var(--accent1)" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;