import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";

import PrivateRoute from './PrivateRoute';

//Pages
import HomePage from 'pages/home/HomePage';
import CheckoutPage from 'pages/checkout/CheckoutPage';
import FinishPage from 'pages/finish/FinishPage'


const RoutesMain = () => {
    return (
        <div className="container">
          <Routes>
            { /* HomePage */ }
            <Route path="/" element={ <HomePage /> } />
            { /* CheckoutPage */ }
            <Route path="/checkout" element={ <CheckoutPage /> } />
            { /* FinishPage */ }
            <Route path="/finish/:orderId" element={<PrivateRoute component={ FinishPage } />} />
          </Routes>
        </div>
    )
}

export default RoutesMain
