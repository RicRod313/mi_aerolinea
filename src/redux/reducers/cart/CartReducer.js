import { 
    ADD_CART, 
    REMOVE_CART,
    CLEAR_CART,
    GET_CART
} from '../../actions/cart/CartAction.type';
import { DATA_CART } from 'utils/Constants';

const initialState = {
    data: {}
}

const CartReducer = (state = initialState, action) => {
    const res = action.payload;
    const cartStr = localStorage.getItem(DATA_CART)
    var cart = {}
    
    switch (action.type) {
        case GET_CART :
            if(cartStr){
                cart = JSON.parse(cartStr)
            }
            return {
                ...initialState,
                data: cart
            };
        case ADD_CART :
            if(cartStr){
                let isInCart = false
                cart = JSON.parse(cartStr)
                cart.items.map((it) => {
                    if(it.id === res.id){
                        isInCart = true
                        it.dataForm.persons = it.dataForm.persons + res.dataForm.persons
                    }
                    return it
                })
                if(!isInCart){
                    cart.items.push(res)
                }
                localStorage.setItem(DATA_CART, JSON.stringify(cart))
            }else{
                cart = {items: []}
                cart.items.push(res)
                localStorage.setItem(DATA_CART, JSON.stringify(cart))
            }
            return {
                ...initialState,
                data: cart
            };
        case REMOVE_CART :
            if(cartStr){
                cart = JSON.parse(cartStr)
                cart.items = cart.items.filter(it => it.id !== res.id)
                console.log(cart)
                localStorage.setItem(DATA_CART, JSON.stringify(cart))
            }
            return {
                ...initialState,
                data: cart
            };
        case CLEAR_CART :
            localStorage.removeItem(DATA_CART)
            return {
                ...initialState,
                data: cart
            };
        default:
            return state;
    }
}

export default CartReducer