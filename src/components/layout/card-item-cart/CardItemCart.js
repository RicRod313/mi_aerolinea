import { useDispatch } from 'react-redux';

import CartAction from 'redux/actions/cart/CartAction';
import { GetStringDate } from 'utils/shared/DateShared'

import Aeromexico from 'assets/images/aeromexico-logo.png'
import Delta from 'assets/images/delta-logo.png'
import Delete from 'assets/icons/delete.png'
import './CardItemCart.css'

const CardItemCart = (props) => {

    const dispatch = useDispatch();
    const date = GetStringDate(props.item.dataForm.date)

    const deleteProduct = () => {
        dispatch(CartAction.removeFromCart(props.item))
    }
    
    return (
        <div className="card-container">
            <div className="card-row">
                <div className="card-info">
                    <div className="item-ubication">
                        <label>Origen</label>
                        <h4>{props.item.dataForm.origin}</h4>
                    </div>
                    <div className="item-ubication">
                        <label>Destino</label>
                        <h4>{props.item.dataForm.destiny}</h4>
                    </div>
                    <div className="item-date">
                        <p>Fecha: </p>
                        <h4>{date}</h4>
                    </div>
                </div>
            </div>
            <div className="card-row">
                <div className="card-info">
                    <div className="item-airline">
                        <h4>{props.item.dataItem.brand}</h4>
                    </div>
                    <div className="item-hour">
                        <h4>{props.item.dataItem.schedule}</h4>
                    </div>
                    <div className="item-type">
                        <h5>{props.item.dataItem.type}</h5>
                    </div>
                </div>
                <div className="card-info">
                    <div className="item-person">
                        <h5>Personas:</h5>
                    </div>
                    <div className="item-persons">
                        <h5>{props.item.dataForm.persons}</h5>
                    </div>
                    <div className="item-price">
                        <h3>${props.item.dataItem.price * props.item.dataForm.persons}.00</h3>
                    </div>
                </div>
            </div>
            <div className="card-row">
                <div className="card-logo">
                    <img src={props.item.dataItem.brand === "Aeromexico" ? Aeromexico : Delta } alt="airlines"/>
                </div>
                <div className="btn-delete" onClick={deleteProduct}>
                    <img src={Delete} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CardItemCart
