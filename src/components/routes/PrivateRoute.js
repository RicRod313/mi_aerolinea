import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OrderAction from 'redux/actions/orders/OrdersAction';
import HomePage from "pages/home/HomePage"

const PrivateRoute = ({component: Component}) => {
    let params = useParams();
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders)
    console.log(params.orderId)
    useEffect(() => {
        dispatch(OrderAction.getOrder(params.orderId))
    },[dispatch, params])

    return (
        orders.search !== null ? <Component /> : <HomePage />
    )
}

export default PrivateRoute
