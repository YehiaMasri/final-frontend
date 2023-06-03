import Item from "antd/es/list/Item";
import { Link } from "react-router-dom";
import "./search.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={`${process.env.REACT_APP_URL}/${item.image}`} alt={item.name} className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        {/* <span className="siDistance">{item.distance}m from center</span> */}
        <span className="siTaxiOp">Capacity: {item.capacity}</span>
        <span className="siSubtitle">
        {item.description}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">Price Per Hour: ${item.price_per_hour}</span>
          {/* <span className="siTaxOp">Includes taxes and fees</span> */}
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Book Now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
