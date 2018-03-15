import { VIEW_PROFILE_CHECK, VIEW_PROFILE_ERROR,
    VIEW_PROFILE_RESULT } from '../actions/ViewProfile';

const initialState = {
email: '',
authentication_token: '',
result: '',
errors: '',
profileID: '',
tourInfo: {
    city: '',
    name: '',
    duration: '',
    description: ''
}
};

const reducer = (state = initialState, action) => {
switch(action.type) {
    case VIEW_PROFILE_CHECK:
        return {
            ...state,
            email: action.email,
            authentication_token: action.authentication_token,
            profileID: action.profileID,
            tourInfo: action.tourInfo
        }
    case VIEW_PROFILE_ERROR:
        return {
            ...state,
            errors: action.errors
        }
    case VIEW_PROFILE_RESULT:
        return {
            ...state,
            result: action.result
        }
    default:
        return state;
}
};

export default reducer;