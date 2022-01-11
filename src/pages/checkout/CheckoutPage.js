import React from 'react'

import Cart from 'components/layout/cart/Cart'
import FormInfo from 'components/layout/form-info/FormInfo'

import './CheckoutPage.css'

const CheckoutPage = () => {
    return (
        <div className="checkout-page">
            <div className="checkout-form-info">
                <FormInfo />
            </div>
            <div className="checkout-cart">
                <Cart />
            </div>
        </div>
    )
}

export default CheckoutPage
