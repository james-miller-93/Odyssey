import { SUBMIT_PAYMENT, PAYMENT_ERROR, PAYMENT_RESULT} from '../actions/Payments';


const initialState = {
	email: '',
	authentication_token: '',
    result: '',
	errors: '',
    token: '',
    id: '',
	

};



const reducer = (state = initialState, action) => {
switch(action.type) {
    case SUBMIT_PAYMENT:
        return {
            ...state,
            email: action.email,
            authentication_token: action.authentication_token,
            token: action.token,
            id: action.id
        }
    case PAYMENT_ERROR:
        return {
            ...state,
            errors: action.errors
        }
    case PAYMENT_RESULT:
        return {
            ...state,
            result: action.result
        }
    default:
        return state;
    }
};

export default reducer;