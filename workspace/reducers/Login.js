import { LOGIN_EMAIL, LOGIN_PASSWORD } from '../actions/Login';

const initialState = {
   email: '',
   password: ''
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
       default:
           return state;

   }
};

export default reducer;
