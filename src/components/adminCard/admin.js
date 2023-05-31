import React, {useState, useEffect} from "react";
import axios from "axios";
import "./adminCard.css";
function AdminCard() {
    const [Data, setData] = useState(null);
    // const [visible, setVisible] = useState(false);
  
    const getDataAdmin = () => {
      const url = process.env.REACT_APP_URL;
        axios
          .get(`${url}/user/users`)
          .then((response) => {
            setData(response.data); // Optionally, set the data state if needed
          });
      };
      
      useEffect(() => {
        getDataAdmin();
      }, []);  
    return (
      <>
        <div className="Patient_box">
          <div className="viewAndNmbr">
            <span> {Data&& Data.length } </span>
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