import { VIEW_TOURS_CHECK,
    VIEW_TOURS_ERROR, VIEW_TOURS_RESULT,
    VIEW_TOURS_DELETE, 
    VIEW_TOURS_DELETE_RESULT,
    VIEW_TOURS_DELETE_ERROR} from '../actions/ViewTours';

const initialState = {
    email: '',
    authentication_token: '',
    result: '',
    errors: '',
    deleteTourID: '',
    deleteTourErrors: '',
    deleteTourResult: ''
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
        case VIEW_TOURS_DELETE:
            return {
                ...state,
                deleteTourID: action.deleteTourID
            }
        case VIEW_TOURS_DELETE_RESULT:
            return {
                ...state,
                deleteTourResult: action.deleteTourResult
            }
        case VIEW_TOURS_DELETE_ERROR:
            return {
                ...state,
                deleteTourErrors: action.deleteTourErrors
            }
        default:
            return state;
    }
}

export default reducer;