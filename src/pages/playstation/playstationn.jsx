import React from "react";
import "./playstation.css";
import Navbar from "../../components/navbar/navbar.jsx";
import RoomListed from "../../components/listedRoom/room";
// import Reserve from "../../components/reservationForm/reservation";

const PlayStation = () => {
	return (
		<div>
			{/* <Navbar /> */}
			{/* heroSection */}
			{/* <div className="play-hero-container">
				<div className="play-hero-content">
					<h1>Enjoy The Challenge</h1>
					<p>
						Start your day with the aromatic embrace of a perfect
						cup of coffee
					</p>
				</div>
			</div> */}
			{/* ================ */}

			<RoomListed />
		</div>
	);
};

export default PlayStation;
