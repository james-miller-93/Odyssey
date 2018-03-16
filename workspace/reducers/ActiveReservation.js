import { ACTIVE_RESERVATION_CHECK_TOURIST, ACTIVE_RESERVATION_ERROR,
    ACTIVE_RESERVATION_RESULT, ACTIVE_RESERVATION_CHECK_TOUR_GUIDE } from '../actions/ActiveReservation';

const initialState = {
email: '',
authentication_token: '',
result: '',
errors: '',
ID: '',
reservations: []
};

const reducer = (state = initialState, action) => {
switch(action.type) {
    case ACTIVE_RESERVATION_CHECK_TOUR_GUIDE:
        return {
            ...state,
            email: action.email,
            authentication_token: action.authentication_token,
            ID: action.ID
        }
    case ACTIVE_RESERVATION_CHECK_TOURIST:
        return {
            ...state,
            email: action.email,
            authentication_token: action.authentication_token,
            ID: action.ID
        }
    case ACTIVE_RESERVATION_ERROR:
        return {
            ...state,
            errors: action.errors
        }
    case ACTIVE_RESERVATION_RESULT:
        return {
            ...state,
            result: action.result
        }
    default:
        return state;
}
};

export default reducer;