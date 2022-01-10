import axios from 'axios';
import { toast } from 'react-toastify';
import { URL_API_COUNTRIES, API_KEY, API_SECRET } from '../../utils/Constants';

const CountriesService = {}

CountriesService.getCountries = async (text) => {
    try {
        return await axios.get( URL_API_COUNTRIES, {
            params: {
                term: text,
                limit: 10
            },
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "APC-Auth": API_KEY,
                "APC-Auth-Secret": API_SECRET
            }
        });
    } catch (error) {
        console.error(error);
        toast.error(error, { position: toast.POSITION.BOTTOM_CENTER})
    }
}

export default CountriesService;