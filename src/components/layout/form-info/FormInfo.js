import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import OrderAction from 'redux/actions/orders/OrdersAction';

const FormInfo = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)

    const formik = useFormik({
        initialValues: {
          idOrigin: "",
          origin: "",
          idDestiny: "",
          destiny: "",
          date: Date(),
          persons: 1
        },
        onSubmit: values => {
            if(JSON.stringify(cart.data) !== '{}'){
                const order = {
                    id: Date.now(),
                    cart: cart.data,
                    info: values
                }
                dispatch(OrderAction.setOrder(order))

            }else{
                toast.error("No hay boletos por comprar", {
                    position: toast.POSITION.BOTTOM_CENTER
                  })
            }
        },
    });

    return (
        <div className="form-container">
            <form action="" onSubmit={formik.handleSubmit} className="formulario">
                <div>
                    <label htmlFor="origin">Origen</label>
                    <input 
                    id="origin"
                    type="text"
                    placeholder="Ciudad origen..." 
                    onChange="{}" 
                    value="{}"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="destiny">Destino</label>
                    <input 
                    id="destiny" 
                    type="text" 
                    placeholder="Ciudad destino..." 
                    onChange="{}" 
                    value="{}"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="persons">Pasajeros</label>
                    <input
                    id="persons" 
                    type="number" 
                    onChange={formik.handleChange}
                    value={formik.values.persons}
                    required
                    />
                </div>
                <div>
                    <button type="submit">Pagar</button>
                </div>
            </form>
        </div>
    )
}

export default FormInfo
