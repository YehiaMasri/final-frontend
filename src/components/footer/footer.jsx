import React from "react";
import axios from "axios";
import "./footer.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlinePhone } from "react-icons/ai";
// import { MdOutlineLocationOn } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
// import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaCaretRight } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import image from "../../asset/images/304977202_599891048488227_4165140898872860292_n-removebg-preview-removebg-preview.png";
const Footer = () => {
	const nodeEnv = process.env.REACT_APP_URL;
	const [social, setSocial] = useState([]);
	const getSocialMedia = async () => {
		try {
			const response = await axios.get(
				`${nodeEnv}/socialmedia`
			);
			setSocial(response.data.docs);
		} catch (err) {
			console.log("error in fetching:", err);
		}
	};
	useEffect(() => {
		getSocialMedia();
	}, []);
	return (
		<footer className="footer">
			<div className="footer__yehia bas-container footer-grid">
				<div className="footer__content-f">
					<a href="/" className="footer__logo">
						<img
							src={image}
							alt="logo"
							className="footer__logo-img"
						/>
					</a>
					<p className="footer__description">
						we are many variations of passages availablebut the
						majority have suffred alteration in some form by
						injected humour words which don't look even slightly
						belivable.
					</p>
					<ul className="footer__contact">
						{
							<li className="footer__contact-item">
								<AiOutlinePhone className="icon" />{" "}
								{social.length > 0 && social[0].number}
							</li>
						}
						{
							<li className="footer__contact-item">
								<IoLocationSharp className="icon" />{" "}
								{social.length > 0 && social[0].location}
							</li>
						}
						{
							<li className="footer__contact-item">
								<FaRegEnvelope className="icon" />{" "}
								{social.length > 0 && social[0].email}
							</li>
						}
					</ul>
				</div>

				<div className="footer__content">
					<h3 className="footer__title">Quik Links</h3>
					<ul className="footer__links">
						<li>
							<NavLink
								to="/"
								className="footer__link"
								activeClassName="active"
							>
								<FaCaretRight className="icon" /> Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/menu"
								className="footer__link"
								activeClassName="active"
							>
								<FaCaretRight className="icon" /> Menu
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/products"
								className="footer__link"
								activeClassName="active"
							>
								<FaCaretRight className="icon" /> Products
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className="footer__link"
								activeClassName="active"
							>
								<FaCaretRight className="icon" /> About-Us
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								className="footer__link"
								activeClassName="active"
							>
								<FaCaretRight className="icon" /> Contact-Us
							</NavLink>
						</li>
					</ul>
				</div>

				<div className="footer__content">
					<h3 className="footer__title">Opening Hours</h3>
					<div className="footer__opening-hour">
						<ul className="opening__hour-list">
							<li className="oprning__hour-item">
								<span>Monday:</span>
								<span>09AM - 12PM</span>
							</li>
							<li className="oprning__hour-item">
								<span>Tuesday:</span>
								<span>09AM - 12PM</span>
							</li>
							<li className="oprning__hour-item">
								<span>wednesday:</span>
								<span>09AM - 12PM</span>
							</li>
							<li className="oprning__hour-item">
								<span>Thursday:</span>
								<span>09AM - 12PM</span>
							</li>
							<li className="oprning__hour-item">
								<span>Friday:</span>
								<span>06PM - 12PM</span>
							</li>
							<li className="oprning__hour-item">
								<span>Saturday:</span>
								<span>09AM - 12PM</span>
							</li>
							<li className="oprning__hour-item">
								<span>Sunday:</span>
								<span>09AM - 12PM</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="footer__content">
					<h3 className="footer__title">Newletter</h3>
					<p className="footer__description">
						Subscribe Our Newletter To Get The Latest Update And
						News
					</p>
					<form action="" className="subscribe__form">
						<input
							type="text"
							placeholder="Your Email"
							className="form__input subscribe__input"
						/>
						<button className="btn btn--flex subscribe__btn">
							<FaRegEnvelope /> Subscribe Now
						</button>
					</form>
					<div className="footer__social-fellow">
						<p>Follow Us:</p>
						<div className="footer__social-links">
							<a href="/" className="footer__social-link">
								<FaFacebook />
							</a>
							<a href="/" className="footer__social-link">
								<FaFacebook />
							</a>
							<a href="/" className="footer__social-link">
								<FaFacebook />
							</a>
						</div>
					</div>
				</div>
			</div>
			<p className="copyright">
				© CopyRight 2023 ,<span>قهوة دايمة.</span> All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
