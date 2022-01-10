import { SET_FLIGHT, CLEAR_FLIGHT } from './FlightsAction.type'

const FlightAction = {}

FlightAction.setFlight = (flight) => {
    return dispatch => {
        dispatch({
            type: SET_FLIGHT,
            payload: flight
        })
        
    }
}

FlightAction.clearFlight = () => {
    return dispatch => {
        dispatch({
            type: CLEAR_FLIGHT
        })
        
    }
}

export default FlightAction;