import { INITIAL_LOGIN_CHECK, INITIAL_LOGIN_ERROR,
        INITIAL_LOGIN_RESULT } from '../actions/InitialLogin';

const initialState = {
    email: '',
    authentication_token: '',
    initialResult: '',
    initialErrors: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIAL_LOGIN_CHECK:
            return {
                ...state,
            }
        case INITIAL_LOGIN_ERROR:
            return {
                ...state,
                initialErrors: action.initialErrors
            }
        case INITIAL_LOGIN_RESULT:
            return {
                ...state,
                initialResult: action.intialResult
            }
        default:
            return state;
    }
};

export default reducer;