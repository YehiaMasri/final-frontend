import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/main.jsx";
import Home from "./pages/home/home.jsx";
// Dashboard Componnents
import MainDash from "./pages/MainDashboard/mainDash";
import Dashboard from "./pages/Dashboard/dashboard.js";
//====================
import Product from "./pages/products/product.jsx";
import PlayStation from "./pages/playstation/playstationn";
import Entertainmnet from "./pages/entertainment/entertainment.jsx";
import Contact from "./pages/contact-us/contact.jsx";
import Login from "./components/login/login.jsx";
import About from "./pages/about-us/about";
import Menu from "./pages/menu/menu.jsx";
import Register from "./components/register/register.jsx";
import axios from "axios";
import cookie from "react-cookies";

export const SidebarStatus = React.createContext();
export const isLoggedIn = React.createContext();
export const isLoading = React.createContext();

function App() {
	const [sidebarExpanded, setSidebarExpanded] = useState(
		window.screen.width > 468 ? true : false
	);

	const [loggedIn, setLoggedIn] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);
	const [loading, setIsLoading] = useState(false);

	const userIsLoggedIn = () => {
		axios
			.get(`http://localhost:5000/user/is-logged-in`, {
				headers: { access_token: cookie.load("access_token") },
			})
			.then((response) => {
				if (response.status === 200) {
					if (cookie.load("user").isAdmin === true) {
						setIsAdmin(true);
					} else {
						setIsAdmin(false);
					}
					setLoggedIn(true);
				}
			})
			.catch((error) => {
				if (error.response === undefined) {
					setLoggedIn(false);
				} else {
					setLoggedIn(false);
				}
			});
	};
	useEffect(() => {
		userIsLoggedIn();
	}, [loggedIn, isAdmin]);
	return (
		<div className="App">
			<isLoading.Provider value={[loading, setIsLoading]}>
				<isLoggedIn.Provider value={[loggedIn, setLoggedIn]}>
					<SidebarStatus.Provider
						value={[sidebarExpanded, setSidebarExpanded]}
					>
						<BrowserRouter>
							<Routes>
								<Route path="/login" element={<Login />} />
								<Route
									path="/register"
									element={<Register />}
								/>
								<Route path="/" element={<Home />} />
								<Route exact path="/" element={<Main />} />
								<Route path="/products" element={<Product />} />
								<Route
									path="/playstation"
									element={<PlayStation />}
								/>
								<Route path="/menu" element={<Menu />} />
								<Route path="/about" element={<About />} />
								<Route path="/contact" element={<Contact />} />
								<Route
									path="/entertainment"
									element={<Entertainmnet />}
								/>
								<Route
									path="/maindash"
									element={<MainDash />}
								/>
								<Route
									path="/dashboard-home"
									element={<Dashboard />}
								/>
							</Routes>
						</BrowserRouter>
					</SidebarStatus.Provider>
				</isLoggedIn.Provider>
			</isLoading.Provider>
		</div>
	);
}

export default App;
