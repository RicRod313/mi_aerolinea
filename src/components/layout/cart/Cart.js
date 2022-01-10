import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardItemCart from '../card-item-cart/CardItemCart';

import CartAction from 'redux/actions/cart/CartAction';

const Cart = () => {

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    useEffect(() => {
        dispatch(CartAction.getCart())
    },[dispatch])

    return (
        <div className="cart-container">

            {JSON.stringify(cart.data) !== '{}' ? cart.data.items.map((item, idx) => (
                <CardItemCart item={item} key={idx} />
            )) : (
                <div className="message-none-Items">
                    <h3>No hay boletos por comprar...</h3>
                </div>
            )}
            
        </div>
    )
}

export default Cart
