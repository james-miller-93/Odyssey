import { UPDATE_ACCOUNT, UPDATE_ACCOUNT_SUBMIT, UPDATE_ACCOUNT_RESULT, UPDATE_ACCOUNT_ERROR } from '../actions/UpdateAccount';


const initialState = {
	email: '',
	authentication_token: '',
    result: '',
	errors: '',
	userInfo:  {
        phone_number: '',
        city: '',
        description: '',

    } ,
    id: '',  
};



const reducer = (state = initialState, action) => {
switch(action.type) {
    case UPDATE_ACCOUNT_SUBMIT:
        return {
            ...state,
            email: action.email,
            authentication_token: action.authentication_token,
            userInfo: action.userInfo,
            id: action.id
        }
    case UPDATE_ACCOUNT_ERROR:
        return {
            ...state,
            errors: action.errors
        }
    case UPDATE_ACCOUNT_RESULT:
        return {
            ...state,
            result: action.result
        }
    case UPDATE_ACCOUNT:
        return {
            ...state,
            userInfo: action.userInfo
    }
    default:
        return state;
}
};

export default reducer;