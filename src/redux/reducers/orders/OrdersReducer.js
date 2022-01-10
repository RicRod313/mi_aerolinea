import { GET_ORDER, SET_ORDER } from '../../actions/orders/OrdersAction.type';
import { DATA_ORDER } from 'utils/Constants';

const initialState = {
    data: {},
    search: null
}

const OrdersReducer = (state = initialState, action) => {
    const res = action.payload;
    const orderStr = localStorage.getItem(DATA_ORDER)
    var order = {}
    var search = null
    switch (action.type) {
        case SET_ORDER :
            if(orderStr){
                order = JSON.parse(orderStr)
                order.orders.push(res)
                localStorage.setItem(DATA_ORDER, JSON.stringify(order))
            }else{
                order = {orders: []}
                order.orders.push(res)
                localStorage.setItem(DATA_ORDER, JSON.stringify(order))
            }
            return {
                ...initialState,
                data: order
            };
        case GET_ORDER :
            if(orderStr){
                order = JSON.parse(orderStr)
                search = order.orders.find(o => o.id === res)
            }
            return {
                ...initialState,
                search: search === undefined ? null : search
            };
        default:
            return state;
    }
}

export default OrdersReducer