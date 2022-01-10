import { combineReducers } from 'redux';

//Reducers
import CountriesReducer from './countries/CountriesReducer';
import FlightsReducer from './flights/FlightsReducer';
import CartReducer from './cart/CartReducer';
import OrdersReducer from './orders/OrdersReducer';

export default combineReducers({
    countries: CountriesReducer,
    flight: FlightsReducer,
    cart: CartReducer,
    orders: OrdersReducer
});