import { useState, useEffect } from "react";
import axios from "axios";
import "../userCard/user.css";

function ProductsCard() {
	const [Data, setData] = useState(null);

	const fetchProductsData = async () => {
		try {
			const respone = await axios.get(
				`${process.env.REACT_APP_URL}/product/products`
			);
			setData(respone.data.docs);
		} catch (err) {
			console.log(err.message);
		}
	};
	useEffect(() => {
		fetchProductsData();
	}, []);
	return (
		<>
			<div className="Patient_box">
				<div className="viewAndNmbr">
					<span> {Data && Data.length} </span>
				</div>
				<div>
					<h2 className="title-dashboard">Total Products </h2>
				</div>
			</div>
		</>
	);
}

export default ProductsCard;
