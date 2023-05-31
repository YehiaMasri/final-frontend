import React, { useEffect, useState, useContext, useRef } from "react";
import Navbar from "../../components/navbar/navbar";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import Grid from "antd/es/card/Grid";
import Loader from "../../components/loader/loader";
import Cookies from "js-cookie";
import axios from "axios";
import Hero from "../../components/heroSection/hero";
import { isLoggedIn } from "../../App.js";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Footer from "../../components/footer/footer";
import "./contact.css";

function Contact(props) {
	const [loggedIn, setLoggedIn] = useContext(isLoggedIn);
	const [links, setLinks] = useState(null);
	const userData = loggedIn
		? JSON.parse(Cookies.get("user"))
		: { username: "mahmoud " };
	const [message, setMessage] = useState({});
	const form = useRef();
	const [social, setSocial] = useState([]);
	const getSocialMedia = async () => {
		try {
			const response = await axios.get(
				"http://localhost:5000/socialmedia"
			);
			setSocial(response.data.docs);
			// console.log(response.data.docs)
		} catch (err) {
			console.log("error in fetching:", err);
		}
	};
	useEffect(() => {
		getSocialMedia();
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_m99ggko",
				"template_2ieqq6c",
				form.current,
				"Ani8vvPy_gOoeacm_"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const handleSendMessage = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:5000/message/`, message, {
				headers: {
					access_token: Cookies.get("access_token"),
				},
			})
			.then((response) => {
				// console.log(response);
				form.current.reset();			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	const handleInputChange = (e) => {
		setMessage({ ...message, [e.target.name]: e.target.value });
		console.log(message);
	};

	return (
		<div>
			<Navbar />
			<Hero />
			<div className="contact-container">
				<h1 className="contact-title">Contact Us</h1>
				<p className="contact-paragraph">
					Any questions or remarks? Just write us a Message! <br></br>
				</p>
				<div className="contact-contact-box">
					<div className="contact-contact-left">
						<h3 className="contact-h3-left">Contact Information</h3>
						<table>
							<tr className="contact-tr">
								<td className="contact-td">
									<Grid
										sx={{
											display: "inline",
											verticalAlign: "middle",
										}}
									>
										<FaEnvelope />
									</Grid>
								</td>
								<td className="contact-td">
									{" "}
									{social && social[0] && (
										<a href={`mailto:${social[0].email}`}>
											{social[0].email}
										</a>
									)}
								</td>
							</tr>
							<tr className="contact-tr">
								<td className="contact-td">
									<Grid
										sx={{
											display: "inline",
											verticalAlign: "middle",
										}}
									>
										<FaPhone />
									</Grid>
								</td>
								<td className="contact-td">
									{social && social[0] && (
										<a>{social[0].number}</a>
									)}
								</td>
							</tr>
							<tr className="contact-tr">
								<td className="contact-td">
									<Grid
										sx={{
											display: "inline",
											verticalAlign: "middle",
										}}
									>
										<FaFacebook />
									</Grid>
								</td>
								<td className="contact-td">
									{" "}
									{social && social[0] &&(
										<a href={`${social[0].facebook}`}>
											{social[0].facebook}
										</a>
									)}
								</td>
							</tr>
							<tr className="contact-tr">
								<td className="contact-td">
									<Grid
										sx={{
											display: "inline",
											verticalAlign: "middle",
										}}
									>
										<FaInstagram />
									</Grid>
								</td>
								<td className="contact-td">
									{" "}
									{social && social[0] &&(
										<a href={`${social[0].tiktok}`}>
											{social[0].tiktok}
										</a>
									)}
								</td>
							</tr>
							<tr className="contact-tr">
								<td className="contact-td">
									<Grid
										sx={{
											display: "inline",
											verticalAlign: "middle",
										}}
									>
										<FaWhatsapp />
									</Grid>
								</td>
								<td className="contact-td">
									{" "}
									{social && social[0] &&(
										<a href={social[0].whatsapp}>
											{social[0].whatsapp}
										</a>
									)}
								</td>
							</tr>
						</table>
					</div>
					<div className="contact-contact-right">
						<h3 className="contact-h3">Send Your Message</h3>
						<form ref={form} onSubmit={sendEmail}>
							<div className="contact-input-row">
								<div className="contact-input-group">
									<label className="contact-label">
										First Name
									</label>
									<input
										onChange={handleInputChange}
										type="text"
										placeholder="First Name"
										className="contact-input"
										name="user_Fname"
									/>
								</div>
								<div className="contact-input-group">
									<label className="contact-label">
										Last Name
									</label>
									<input
										onChange={handleInputChange}
										type="text"
										placeholder="Last Name "
										className="contact-input"
										name="user_Lname"
									/>
								</div>
							</div>
							<div className="contact-input-row">
								<div className="contact-input-group">
									<label className="contact-label">
										Phone
									</label>
									<input
										onChange={handleInputChange}
										className="contact-input"
										type="text"
										placeholder={userData.phone}
										name="phone"
									/>
								</div>
								<div className="contact-input-group">
									<label className="contact-label">
										Email
									</label>
									<input
										onChange={handleInputChange}
										className="contact-input"
										type="text"
										placeholder={userData.email}
										name="user_email"
									/>
								</div>
							</div>
							<label className="contact-label">Message</label>
							<textarea
								onChange={handleInputChange}
								className="contact-area"
								name="message"
								rows="5"
								placeholder="Your Message"
							></textarea>

							<button
								type="submit"
								className="contact-button"
								onClick={handleSendMessage}
							>
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
