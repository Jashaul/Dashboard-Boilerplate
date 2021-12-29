import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashBoard from '../components/dashboard/Dashboard';

function AppRouter() {
    return(
        <Routes>
            <Route exact path="/" element={<DashBoard />} />
            <Route exact path="/Dashboard" element={<DashBoard />} />
        </Routes>
    )
}

export default AppRouter;