import { MY_PROFILE_CHECK, MY_PROFILE_ERROR,
    MY_PROFILE_RESULT, 
    MY_PROFILE_SET} from '../actions/MyProfile';

const initialState = {
email: '',
authentication_token: '',
result: '',
errors: '',
profileID: '',
myProfile: {
    firstname: '',
    lastname: '',
    email: '',
    phone_number: '',
    latitude: '',
    longitude: '',
},
};

const reducer = (state = initialState, action) => {
switch(action.type) {
    case MY_PROFILE_CHECK:
        return {
            ...state,
            email: action.email,
            authentication_token: action.authentication_token
        }
    case MY_PROFILE_ERROR:
        return {
            ...state,
            errors: action.errors
        }
    case MY_PROFILE_RESULT:
        return {
            ...state,
            result: action.result
        }
    case MY_PROFILE_SET:
        return {
            ...state,
            myProfile: action.myProfile
        }
    default:
        return state;
}
};

export default reducer;