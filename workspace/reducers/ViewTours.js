import { VIEW_TOURS_CHECK,
    VIEW_TOURS_ERROR, VIEW_TOURS_RESULT } from '../actions/ViewTours';

const initialState = {
    email: '',
    authentication_token: '',
    result: '',
    errors: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case VIEW_TOURS_CHECK:
            return {
                ...state,
                authentication_token: action.authentication_token,
                email: action.email
            }
        case VIEW_TOURS_RESULT:
            return {
                ...state,
                result: action.result,
            }
        case VIEW_TOURS_ERROR:
            return {
                ...state,
                errors: action.errors
            }
        default:
            return state;
    }
}

export default reducer;