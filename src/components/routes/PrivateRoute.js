import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderAction from 'redux/actions/orders/OrdersAction';
import HomePage from "pages/home/HomePage"

const PrivateRoute = ({component: Component}) => {

    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders)

    useEffect(() => {
        dispatch(OrderAction.getOrder(this.props.match.params.id))
    },[dispatch])

    return (
        orders.search !== null ? <Component /> : <HomePage />
    )
}

export default PrivateRoute
