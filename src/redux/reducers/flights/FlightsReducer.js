import { SET_FLIGHT, CLEAR_FLIGHT } from '../../actions/flights/FlightsAction.type';

const initialState = {
    data: null
}

const FlightsReducer = (state = initialState, action) => {
    const res = action.payload;
    switch (action.type) {
        case SET_FLIGHT :
            return {
                ...initialState,
                data: res
            };
        case CLEAR_FLIGHT :
            return {
                ...initialState,
                data: null
            };
        default:
            return state;
    }
}

export default FlightsReducer