import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import OrderAction from 'redux/actions/orders/OrdersAction';

import './FormInfo.css'
import CartAction from 'redux/actions/cart/CartAction';

const FormInfo = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)

    const formik = useFormik({
        initialValues: {
          name: "",
          lastname: "",
          email: "",
          street: "",
          numExt: "",
          numInt: "",
          adress1: "",
          adress2: "",
          state: "",
          country: ""
        },
        onSubmit: values => {
            if(JSON.stringify(cart.data) !== '{}'){
                const order = {
                    id: Date.now().toString(),
                    cart: cart.data,
                    info: values
                }
                dispatch(OrderAction.setOrder(order))
                console.log(order)
                navigate(`/mi_aerolinea/finish/${order.id}`)
                dispatch(CartAction.clearCart())
            }else{
                toast.error("No hay boletos por comprar", {
                    position: toast.POSITION.BOTTOM_CENTER
                  })
            }
        },
    });

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
        <div className="formulario-container-info">
            <form action="" onSubmit={formik.handleSubmit} className="formulario-info">
                <div className="input-container">
                    <label htmlFor="name">Nombres</label>
                    <input 
                    id="name"
                    type="text" 
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="lastname">Apellidos</label>
                    <input 
                    id="lastname"
                    type="text" 
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                    required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Correo electronico</label>
                    <input
                    id="email" 
                    type="email" 
                    placeholder='ejemplo@gmail.com'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="street">Calle</label>
                    <input
                    id="street" 
                    type="text" 
                    onChange={formik.handleChange}
                    value={formik.values.street}
                    required
                    />
                </div>
                <div className="row-numbers">
                    <div className="input-container">
                        <label htmlFor="numExt">No Exterior</label>
                        <input
                        id="numExt" 
                        type="number" 
                        onChange={formik.handleChange}
                        value={formik.values.numExt}
                        required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="numInt">No Interior</label>
                        <input
                        id="numInt" 
                        type="number" 
                        onChange={formik.handleChange}
                        value={formik.values.numInt}
                        />
                    </div>
                </div>
                <div className="input-container">
                    <label htmlFor="adress1">Colonia</label>
                    <input
                    id="adress1" 
                    type="text" 
                    onChange={formik.handleChange}
                    value={formik.values.adress1}
                    required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="adress2">Municipio</label>
                    <input
                    id="adress2" 
                    type="text" 
                    onChange={formik.handleChange}
                    value={formik.values.adress2}
                    required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="state">Estado</label>
                    <input
                    id="state" 
                    type="text" 
                    onChange={formik.handleChange}
                    value={formik.values.state}
                    required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="country">Pais</label>
                    <input
                    id="country" 
                    type="text" 
                    onChange={formik.handleChange}
                    value={formik.values.country}
                    required
                    />
                </div>
                <div className="input-container">
                    <button type="submit">Pagar</button>
                </div>
            </form>
            <div className="data-info2">
                <div className="data-row">
                    <h5>Boletos Totales:</h5>
                    <h5>{getBoletos()}</h5>
                </div>
                <div className="data-row">
                    <h5>Monto Toltal:</h5>
                    <h5>${getTotal()}.00</h5>
                </div>
            </div>
        </div>
    )
}

export default FormInfo
