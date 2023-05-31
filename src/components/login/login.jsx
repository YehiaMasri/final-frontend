import React, { useRef, useState, useContext } from "react";
import axios from "axios";
import cookie from "react-cookies";
import { isLoggedIn } from "../../App";
import { Link, Navigate } from "react-router-dom";
import "./login.css";

const Login = () => {
	const [err, setErr] = useState("");
	const [isAdmin, setIsAdmin] = useState(false);
	const [loading, setLoading] = useState(false);
	const email = useRef();
	const password = useRef();

	const [loggedIn, setLoggedIn] = useContext(isLoggedIn);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		let data = {};
		if (email.current.value.includes("@")) {
			data.email = email.current.value;
		}
		data.password = password.current.value;
		axios
			.post(`http://localhost:5000/user/login`, data)
			.then((response) => {
				console.log(response.data.role);
				cookie.save("user", JSON.stringify(response.data.response), {
					maxAge: 5 * 60 * 60 * 1000,
				});
				setErr("");
				if (
					response.data.role === "admin" ||
					response.data.isAdmin === true
				) {
					setIsAdmin(true);
				}
				setLoggedIn(true);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				if (error.response === undefined) {
					setErr(error.message);
				} else {
					setErr(error.response.data.err);
				}
				setLoading(false);
			});
	};

	return (
		<>
			{loggedIn && isAdmin ? (
				<Navigate to="/maindash" replace={true} />
			) : (
				loggedIn && <Navigate to="/" replace={true} />
			)}
			<div className="login-container">
				<div className="login-image"></div>
				<form onSubmit={handleSubmit} className="login-form">
					<h2 className="login-title">Login</h2>

					<label htmlFor="email" className="login-label">
						Email or Phone
					</label>

					<input
						ref={email}
						type="text"
						id="email-or-phone"
						name="email-or-phone"
						className="login-input"
						placeholder="Email or Phone"
						required
					/>

					<label htmlFor="password" className="login-label">
						Password
					</label>

					<input
						ref={password}
						type="password"
						id="password"
						name="password"
						className="login-input"
						placeholder="Password"
						minLength={8}
						required
					/>

					{err !== "" && err && (
						<div
							className="login-error-message"
							style={{ marginBottom: "1pc" }}
						>
							{err}
						</div>
					)}

					<button type="submit" className="login-button">
						{loading ? "Checking..." : "Login"}
					</button>
					<p className="login-link">
						New user?{" "}
						<Link to="/register" className="to-register">
							Register
						</Link>
					</p>
				</form>
			</div>
		</>
	);
};

export default Login;
