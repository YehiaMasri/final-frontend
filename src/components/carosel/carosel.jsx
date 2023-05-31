import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import play from "../../asset/images/PlaystationLogo-removebg-preview.png";
import film from "../../asset/images/film-removebg-preview.png";
import silent from "../../asset/images/Silent.png";
import "./carosel.css";

function Services() {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	const Products = [
		{
			id: 1,
			image: silent,
			name: "Silent Room",
			path: "/silentroom",
			description: "Silent description",
		},
		{
			id: 2,
			image: film,
			name: "Film",
			path: "/film",
			description: "Film description",
		},
		{
			id: 3,
			image: play,
			name: "PlayStation",
			path: "/playstation",
			description: "PlayStation description",
		},
	];

	return (
		<div>
			<div className="product-home-container">
				<h1 className="product-home-title">Our Services</h1>
				<Carousel responsive={responsive}>
					{Products.map((product) => (
						<div className="card" key={product.id}>
							<div className="carousel-img-container">
								<img
									className="product--image"
									src={product.image}
									alt={product.name}
								/>
							</div>
							<h2 className="room--name">{product.name}</h2>
							{product.description && (
								<p className="room-description">
									{product.description}
								</p>
							)}
							<NavLink to={product.path} className="nav-link">
								Book a Place
							</NavLink>
						</div>
					))}
				</Carousel>
				;
			</div>
		</div>
	);
}

export default Services;
