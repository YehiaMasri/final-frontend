import React, { useState, useEffect } from "react";
import axios from "axios";
import "./adminCard.css";
function AdminCard() {
	const [Data, setData] = useState(null);
	const [Loading, setLoading] = useState(false);
	// const [visible, setVisible] = useState(false);

	const fetchAdminData = async () => {
		try {
			const respone = await axios.get(
				`${process.env.REACT_APP_URL}/user/`
			);
			setData(respone.data);
		} catch (err) {
			console.log(err.message);
		}
	};
	useEffect(() => {
		fetchAdminData();
	}, []);
	return (
		<>
			<div className="Patient_box">
				<div className="viewAndNmbr">
					<span> {Data && Data.length} </span>
				</div>
				<div>
					<h2 className="title-dashboard">Total admins </h2>
					{/* <img  className="patient-card-image" src={flower} alt="nothing" /> */}
				</div>
			</div>
		</>
	);
}

export default AdminCard;
