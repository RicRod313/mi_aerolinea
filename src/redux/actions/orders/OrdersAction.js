import { GET_ORDER, SET_ORDER } from './OrdersAction.type'

const OrderAction = {}

OrderAction.getOrder = (orderId) => {
    return dispatch => {
        dispatch({
            type: GET_ORDER,
            payload: orderId
        })
        
    }
}

OrderAction.setOrder = (order) => {
    return dispatch => {
        dispatch({
            type: SET_ORDER,
            payload: order
        })
        
    }
}

export default OrderAction;