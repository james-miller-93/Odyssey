import { REGISTER_FIRST_NAME, REGISTER_LAST_NAME,
    REGISTER_EMAIL, REGISTER_PASS,
      REGISTER_PASS_CONF, REGISTER_SUBMIT,
      REGISTER_RESULT, REGISTER_ERROR,
        REGISTER_ERROR_CLEAN } from '../actions/Register';

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: '',
    result: ''
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
        case REGISTER_RESULT:
            return {
                ...state,
                result: action.result || ''
            };
        case REGISTER_ERROR:
            return {
                ...state,
                errors: action.errors,
            };
        case REGISTER_ERROR_CLEAN:
            return {
                ...state,
                errors: '',
            }
        default:
            return state;

    }
};

export default reducer;

