import { GET_COUNTRIES } from '../../actions/countries/CountriesAction.type';

const initialState = {
    data: []
}

const CountriesReducer = (state = initialState, action) => {
    const res = action.payload;
    switch (action.type) {
        case GET_COUNTRIES :
            return {
                ...initialState,
                data: res
            };
        default:
            return state;
    }
}

export default CountriesReducer