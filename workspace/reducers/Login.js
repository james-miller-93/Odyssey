import { LOGIN_EMAIL, LOGIN_PASSWORD, LOGIN_SUBMIT,
    LOGIN_ERROR, LOGIN_RESULT,
    LOGIN_ERROR_CLEAN } from '../actions/Login';

const initialState = {
   email: '',
   password: '',
   errors: '',
   authentication_token: '',
   result: '',
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
        case LOGIN_EMAIL:
            return {
                ...state,
                email: action.value || '',
            };
        case LOGIN_PASSWORD:
            return {
                ...state,
                password: action.value || '',
            };
        case LOGIN_SUBMIT:
            return {
                ...state,
            };
        case LOGIN_RESULT:
            return {
                ...state,
                result: action.result,
                authentication_token: action.authentication_token || '',
            }
        case LOGIN_ERROR:
            return {
                ...state,
                errors: action.errors,
            }
        case LOGIN_ERROR_CLEAN:
            return {
                ...state,
                errors: '',
            }
       default:
           return state;

   }
};


export default reducer;
