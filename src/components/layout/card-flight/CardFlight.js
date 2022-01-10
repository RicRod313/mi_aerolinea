import { useDispatch } from 'react-redux';

import { GetStringDate } from 'utils/shared/DateShared'
import CartAction from 'redux/actions/cart/CartAction';
import FlightAction from 'redux/actions/flights/FlightsAction';

import Aeromexico from 'assets/images/aeromexico-logo.png'
import Delta from 'assets/images/delta-logo.png'
import './CardFlight.css'

const CardFlight = (props) => {

    const dispatch = useDispatch();

    const addProduct = () => {
        const item = {
            id: props.data.idOrigin + props.data.idDestiny + GetStringDate(props.data.date) + props.item.id,
            dataForm: props.data,
            dataItem: props.item
        }
        dispatch(CartAction.addToCart(item))
        dispatch(FlightAction.clearFlight())
    }

    return (
        <div className="card-container">
            <div className="card-row">
                <div className="card-info">
                    <div className="item-airline">
                        <h4>{props.item.brand}</h4>
                    </div>
                    <div className="item-hour">
                        <h3>{props.item.schedule}</h3>
                    </div>
                    <div className="item-type">
                        <h5>{props.item.type}</h5>
                    </div>
                </div>
                <div className="item-price">
                    <h3>${props.item.price}.00</h3>
                </div>
            </div>
            <div className="card-row">
                <div className="card-logo">
                    <img src={props.item.brand === "Aeromexico" ? Aeromexico : Delta } alt="airlines"/>
                </div>
                <div className="btn-card">
                    <button type="button" onClick={addProduct}>Seleccionar Vuelo</button>
                </div>
            </div>
        </div>
    )
}

export default CardFlight
