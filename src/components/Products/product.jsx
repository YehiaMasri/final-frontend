import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../loader/loader.jsx";
import "./product.css"
const Product = () => {
	const [data, setData] = useState(null);
  const [loading, setLoading]= useState(false)
	const fetchData = async () => {
    setLoading(true)
		try {
			const respone = await axios.get(`http://localhost:5000/product`);
			setData(respone.data.docs);
      setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

 
	
	return (
		<div>
      <div className="page-container">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="page-title">Products</h1>
              <hr className="page-divider" />
            </div>
          </div>
        </div>
        <div className="products-container">
          {loading ? (
            <Loader />
          ) : (
            <div className="all-products">
              {data &&
                data.map((item) => (
                  <div className="product-container" key={item._id}>
                    <div className="product-image-container">
                      <img
                        src={`http://localhost:5000/${item.image}`}
                        alt={item.name}
                        className="product-image"
                      />
                    </div>
                    <div className="product-details">
                      <h5 className="product-title">{item.name}</h5>
                      <p className="product-price">${item.price}</p>
                      <NavLink
                        to={`/products/${item.id}`}
                        className="product-button"
                      >
                        Order Now
                      </NavLink>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
	);
};

export default Product;
