import { ACTIVE_RESERVATION_CHECK_TOURIST, ACTIVE_RESERVATION_ERROR,
    ACTIVE_RESERVATION_RESULT, ACTIVE_RESERVATION_CHECK_TOUR_GUIDE,
    ACTIVE_RESERVATION_ACCEPT, ACTIVE_RESERVATION_DECLINE,
    ACTIVE_RESERVATION_ACTION_RESULT, ACTIVE_RESERVATION_ACTION_ERROR } from '../actions/ActiveReservation';

const initialState = {
email: '',
authentication_token: '',
result: '',
errors: '',
ID: '',
reservations: [],
reservationID: '',
actionResult: '',
actionErrors: ''
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
    case ACTIVE_RESERVATION_ACCEPT:
        return {
            ...state,
            email: action.email,
            authentication_token: action.authentication_token,
            reservationID: action.reservationID
        }
    case ACTIVE_RESERVATION_DECLINE:
        return {
            ...state,
            email: action.email,
            authentication_token: action.authentication_token,
            reservationID: action.reservationID
        }
    case ACTIVE_RESERVATION_ACTION_RESULT:
        return {
            ...state,
            actionResult: action.actionResult
        }
    case ACTIVE_RESERVATION_ACTION_ERROR:
        return {
            ...state,
            actionErrors: action.actionErrors
        }
    default:
        return state;
}
};

export default reducer;