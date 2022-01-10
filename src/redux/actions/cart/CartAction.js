import { 
    ADD_CART, 
    REMOVE_CART,
    CLEAR_CART,
    GET_CART
} from './CartAction.type'

const CartAction = {}

CartAction.getCart = () => {
    return dispatch => {
        dispatch({
            type: GET_CART
        })
    }
}

CartAction.addToCart = (data) => {
    return dispatch => {
        dispatch({
            type: ADD_CART,
            payload: data
        })
    }
}

CartAction.removeFromCart = (data) => {
    return dispatch => {
        dispatch({
            type: REMOVE_CART,
            payload: data
        })
    }
}

CartAction.clearCart = () => {
    return dispatch => {
        dispatch({
            type: CLEAR_CART
        })
    }
}

export default CartAction;