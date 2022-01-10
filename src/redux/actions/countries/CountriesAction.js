import { toast } from 'react-toastify';
import CountriesService from 'services/countries/Countries.service';
import { GET_COUNTRIES } from './CountriesAction.type';

const CountriesAction = {}

CountriesAction.getCountries = (text) => {
    return dispatch => {
        CountriesService.getCountries(text).then(response => {
            dispatch({
                type: GET_COUNTRIES,
                payload: response.data
            })
        }).catch(error => {
            console.error(error.message);
            toast.error(error.message, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        })
    }
}

export default CountriesAction;