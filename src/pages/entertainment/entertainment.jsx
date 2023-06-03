import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/navbar";
import SearchItem from "../../components/searchItem/search";
import Footer from "../../components/footer/footer";

function Entertainmnet(props) {
	const [data, setData] = useState(null);
    const [loading, setLoading] =useState(false)
	const fetchData = async () => {
		try {
			const respone = await axios.get(
				`${process.env.REACT_APP_URL}/room/`
			);
			setData(respone.data);
			console.log(respone.data);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<Navbar />
            <div className="listContainer">
        <div className="listWrapper">
        <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data && data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
		</div>
        <Footer />
        </>
	);
}

export default Entertainmnet;
