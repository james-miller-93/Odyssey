import { UPDATE_ACTIVE_SWITCH, ACTIVE_SWITCH_ERROR, ACTIVE_SWITCH_RESULT} from '../actions/IsActive';


const initialState = {
	email: '',
	authentication_token: '',
	result: '',
	errors: '',
    active: '',
    location: '',
    id: '',

};



const reducer = (state = initialState, action) => {
switch(action.type) {
    case UPDATE_ACTIVE_SWITCH:
        return {
            ...state,
            //maybe without the email/token
            email: action.email,
            authentication_token: action.authentication_token,
            active: action.active,
            location: action.location,
            id: action.id,
        }
    case ACTIVE_SWITCH_ERROR:
        return {
            ...state,
            errors: action.errors
        }
    case ACTIVE_SWITCH_RESULT:
        return {
            ...state,
            result: action.result
        }
    
    default:
        return state;
}
};

export default reducer;