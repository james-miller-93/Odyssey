import { LOGOUT_CHECK, LOGOUT_ERROR, LOGOUT_RESULT} from '../actions/LogOut';

const initialState = {
    email: '',
    authentication_token: '',
    result: '',
    errors: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGOUT_CHECK:
            return {
                ...state,
                email: action.email,
                authentication_token: action.authentication_token,
            }
        case LOGOUT_ERROR:
            return {
                ...state,
                errors: action.errors
            }
        case LOGOUT_RESULT:
            return {
                ...state,
                result: action.result
            }
        default:
            return state;
    }
};

export default reducer;