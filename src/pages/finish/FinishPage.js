import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CardFinal from 'components/layout/card-final/CardFinal';

import Banner from 'assets/images/banner.jpg'
import './FinishPage.css'

const FinishPage = () => {

    const navigate = useNavigate();
    const orders = useSelector((state) => state.orders)

    const goToHomePage = () => {
        navigate("/mi_aerolinea/")
    }

    const getBoletos = () => {
        let count = 0 
        orders.search.cart.items.forEach(item => {
            count += item.dataForm.persons
        })
        return count
      }
    
      const getTotal = () => {
        let count = 0
        orders.search.cart.items.forEach(item => {
        count += item.dataForm.persons * item.dataItem.price
        })
        return count
      }

    return (
        <div className="finish-page">
            <div className="finish-info">
                <div className='banner-title'>
                    <img src={Banner} alt=''/>
                    <div className='banner-info'>
                        <h3>Felicidades!</h3>
                        <p>{orders.search.info.name} {orders.search.info.lastname}</p>
                        <p>Orden # {orders.search.id}</p>
                    </div>
                </div>
                <div className='info-content'>
                    <div className="data-info2">
                        <div className="data-row">
                            <h5>Boletos Totales:</h5>
                            <h5>{getBoletos()}</h5>
                        </div>
                        <div className="data-row">
                            <h5>Monto Toltal:</h5>
                            <h5>${getTotal()}.00</h5>
                        </div>
                    </div>
                    <div className='message-final'>
                        <p>Gracias por confiar en nuestro servicio</p>
                        <p>Te deseamos un excelente viaje!</p>
                    </div>
                </div>
            </div>
            <div className="finish-items">
                {orders.search.cart.items.map((item, idx) => (
                    <CardFinal item={item} key={idx} />
                ))}
            </div>
            <div className="btn-finish">
                <button onClick={() => goToHomePage()}>Salir</button>
            </div>
        </div>
    )
}

export default FinishPage
