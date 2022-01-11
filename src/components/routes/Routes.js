import React from 'react'
import { useSelector } from 'react-redux';
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

  const cart = useSelector((state) => state.cart)

    return (
        <div className="container">
          <Routes>
            { /* HomePage */ }
            <Route path="/mi_aerolinea/" element={ <HomePage /> } />
            { /* CheckoutPage */ }
            <Route path="/mi_aerolinea/checkout" element={ JSON.stringify(cart.data) !== '{}' ? <CheckoutPage /> : <HomePage /> } />
            { /* FinishPage */ }
            <Route path="/mi_aerolinea/finish/:orderId" element={<PrivateRoute component={ FinishPage } />} />
          </Routes>
        </div>
    )
}

export default RoutesMain
