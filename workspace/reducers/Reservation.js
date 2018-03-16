import { RESERVATION_CHECK, RESERVATION_ERROR,
    RESERVATION_RESULT } from '../actions/Reservation';

const initialState = {
email: '',
authentication_token: '',
result: '',
errors: '',
tourID: '',
dateTime: new Date()
};

const reducer = (state = initialState, action) => {
switch(action.type) {
    case RESERVATION_CHECK:
        return {
            ...state,
            email: action.email,
            authentication_token: action.authentication_token,
            tourID: action.tourID,
            dateTime: action.dateTime
        }
    case RESERVATION_ERROR:
        return {
            ...state,
            errors: action.errors
        }
    case RESERVATION_RESULT:
        return {
            ...state,
            result: action.result
        }
    default:
        return state;
}
};

export default reducer;