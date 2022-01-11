import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import Cart from '../cart/Cart'

import CartAction from 'redux/actions/cart/CartAction';
import OrderAction from 'redux/actions/orders/OrdersAction';

import Back from 'assets/icons/back.png'
import './SideDrawer.css'

const SideDrawer = (props) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders)
  const cart = useSelector((state) => state.cart)

  const formik = useFormik({
    initialValues: {
      orderId: ""
    },
    onSubmit: values => {
      dispatch(OrderAction.getOrder(values.orderId))
      if(orders.search !== null){
        props.onClose()
        navigate(`/mi_aerolinea/finish/${values.orderId}`)
      }else{
        toast.error("La orden ingresada no existe", {
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
  });

  const clearCart = () => {
    dispatch(CartAction.clearCart())
  }

  const goToCheckout = () => {
    if(JSON.stringify(cart.data) !== '{}'){
      props.onClose()
      navigate("/mi_aerolinea/checkout")
    }else{
      toast.error("No hay boletos por comprar", {
        position: toast.POSITION.BOTTOM_CENTER
      })
    }
  }

  const getBoletos = () => {
    let count = 0
    if(JSON.stringify(cart.data) !== '{}'){
      cart.data.items.forEach(item => {
        count += item.dataForm.persons
      })
    }
    return count
  }

  const getTotal = () => {
    let count = 0
    if(JSON.stringify(cart.data) !== '{}'){
      cart.data.items.forEach(item => {
        count += item.dataForm.persons * item.dataItem.price
      })
    }
    return count
  }

  return (
    <div className='main-container'>
      <div 
        className={props.open ? 'side-cart-container' : 'side-cart-container active'} 
        onClick={props.onClose}></div>
      <div className={props.open ? 'side-cart active' : 'side-cart'}>
        <div className="btn-close-menu" onClick={props.onClose}>
          <img className="img-back" src={Back} alt="" />
        </div>
        <div className="title-sidebar">
          <h3>Boletos por Comprar</h3>
        </div>
        <div className="side-container-cart">
          <Cart />
        </div>
        <div className="data-info">
          <div className="data-row">
            <h5>Boletos Totales:</h5>
            <h5>{getBoletos()}</h5>
          </div>
          <div className="data-row">
            <h5>Monto Toltal:</h5>
            <h5>${getTotal()}.00</h5>
          </div>
        </div>
        <div className="btn-clear">
          <span onClick={() => clearCart()}>Limpiar boletos</span>
        </div>
        <div className="btn-buy">
          <button type="button" onClick={() => goToCheckout()}>Finalizar Compra</button>
        </div>
        <form action="" className="search-order" onSubmit={formik.handleSubmit} >
          <label htmlFor="orderId">Buscador de ordenes</label>
          <div className="search-input">
            <input
              id="orderId"
              placeholder="Orden..."
              value={formik.values.orderId}
              onChange={formik.handleChange}
              type="text"
              required
            />
            <button type="submit">Buscar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SideDrawer
