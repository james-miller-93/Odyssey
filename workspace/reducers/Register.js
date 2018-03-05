import { REGISTER_FIRST_NAME, REGISTER_LAST_NAME, REGISTER_EMAIL, REGISTER_PASS,
      REGISTER_PASS_CONF, REGISTER_SUBMIT } from '../actions/Register';

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_FIRST_NAME:
            return {
                ...state,
                firstname: action.value || '',
            };
        case REGISTER_LAST_NAME:
            return {
                ...state,
                lastname: action.value || '',
            };
        case REGISTER_EMAIL:
            return {
                ...state,
                email: action.value || '',
            };
        case REGISTER_PASS:
            return {
                ...state,
                password: action.value || '',
            };
        case REGISTER_PASS_CONF:
            return {
                ...state,
                passwordConfirmation: action.value || '',
            };
        case REGISTER_SUBMIT:
            return {
                ...state,
            };
        default:
            return state;

    }
};

export default reducer;

