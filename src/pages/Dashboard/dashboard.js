import React from "react";
import AdminCard from "../../components/adminCard/admin";
import "./dash.css";

export default function Dashboard() {
    return (
      <div>
        <h3 className="pagetitle">Dashboard</h3>
        <div className="dashboard-components">
          <div className="dashboard-cards">
            <AdminCard />
            {/* <PatienCard />
            <NewBornCard />
            
            <IncomeCard />
            <ExpenseCard /> */}
          </div>
          <div className="dashboard-calender">
          {/* <Calendar /> */}
          </div>
        </div>
      </div>
    );
  }
  