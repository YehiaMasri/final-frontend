import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import Dashboard from '../Dashboard/dashboard';
import { Outlet } from 'react-router-dom';
import "./mainDash.css"
function MainDash(props) {
    return (
        <div className='main-dashboard'>
        <Sidebar />
        <div className='dashboard-pages'>
            <Dashboard />
            <Outlet />
        </div>
    </div>
    );
}

export default MainDash;