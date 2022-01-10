import React from 'react'
import { useSelector } from 'react-redux';

const FinishPage = () => {
    const orders = useSelector((state) => state.orders)
    console.log(orders.search)
    return (
        <div className="finish-page">
            <div className="finish-info">
                
            </div>
            <div className="finish-items">
                
            </div>
            <div>
                <button className="btn-finish">Pagar</button>
            </div>
        </div>
    )
}

export default FinishPage
