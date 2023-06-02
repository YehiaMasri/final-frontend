import React from "react";
import "./user.css";
import { useState, useEffect } from "react";
import axios from "axios";

function UserCard() {
	const [Data, setData] = useState(null);
	const [visible, setVisible] = useState(false);
	const getDataUser = () => {
		axios
			.get(`${process.env.REACT_APP_URL}/user/users`)
			.then((response) => {
				setData(response.data)
			});
	};
	useEffect(() => {
		getDataUser();
	}, []);
	return (
		<>
			<div className="Patient_box">
				<div className="viewAndNmbr">
					<span> {Data && Data.length} </span>
				</div>
				<div>
					<h2 className="title-dashboard">Total Users </h2>
				</div>
			</div>
		</>
	);
}

export default UserCard;
