import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./room.css";

// import useFetch from "../hooks/usefetch";

function RoomListed() {
	// const { data, loadin, error } = useFetch(`http://localhost:5000/room`);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

    const fetchData= async ()=>{
        setLoading(true)
        try{
            const respone = await axios.get(`http://localhost:5000/room`);
            setData(respone.data)
            console.log(respone.data)
        }catch(err){
            console.log(err.message)
        }
    }
	return (
		<div className="serachItem">
			<img src="" alt="" className="Room" />
			<div className="siDesc">
				<h1 className="siTitle">{/*data[0].name*/}</h1>
				<span className="siSubtitle">Enjoye the gaming</span>
				<span className="siFeatures">{/*data[0].description*/}</span>
				<span className="siCancelOp">
					Capacity: {/*data[0].capacity*/}
				</span>
			</div>
			<div className="siDetails">
				<div className="siDetailsTexts">
					<span className="siPrice">
						Price per Hour: {/*data[0].price_per_hour*/} LBP
					</span>
					<Link to={`/playstationnn`}>
						<button className="siCheckButton">
							See availability
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default RoomListed;
