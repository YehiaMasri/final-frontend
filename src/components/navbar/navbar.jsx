import React from "react";
import { useState } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import {AiOutlineDown} from "react-icons/ai"
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
						<img
							className="logo ml-16"
							src={logo1}
							width="230"
							height="170"
							alt="logo"
						/>
					</NavLink>
					<ul
						className={Mobile ? "nav-links-mobile" : "nav-links"}
						onClick={() => setMobile(false)}
					>
						<NavLink to="/">
							<li>Home</li>
						</NavLink>
						<NavLink to="/products">
							<li>Products</li>
						</NavLink>
						<NavLink to="/menu">
							<li>Menu</li>
						</NavLink>
						{!Mobile && (
							<NavLink to="/">
								<li>
									<img src={logo} alt="logo" />
								</li>
							</NavLink>
						)}
						<li className="dropdown">
							<NavLink to="/entertainment">Entertainment <AiOutlineDown className="icon-nav"/></NavLink>
							<ul className="dropdown-content">
								<li>
									<NavLink to="/silent-room">
										Silent Room
									</NavLink>
								</li>
								<li>
									<NavLink to="/film">
										Film
									</NavLink>
								</li>
								<li>
									<NavLink to="/playstation">
										Playstation
									</NavLink>
								</li>
							</ul>
						</li>
						<NavLink to="/about">
							<li>About-Us</li>
						</NavLink>
						<NavLink to="/contact">
							<li>Contact-Us</li>
						</NavLink>
						<div className="registration">
							<NavLink to="/login">
								<li>Login</li>
							</NavLink>
							<NavLink to="/register">
								<li>Register</li>
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
