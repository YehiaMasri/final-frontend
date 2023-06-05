import React from "react";
import { NavLink } from "react-router-dom";

const Product = (curElem) => {
    const { id, name, image, price, category_id } = curElem;
    return (
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
          <figure>
            <img src={`${process.env.REACT_APP_URL}/${image}`} alt={name} />
            <figcaption className="caption">{category_id && category_id.name}</figcaption>
          </figure>
  
          <div className="card-data">
            <div className="card-data-flex">
              <h3>{name}</h3>
              <p className="card-data--price"> price: {price}$</p>
            </div>
          </div>
        </div>
      </NavLink>
    );
  };
  
  export default Product;
  