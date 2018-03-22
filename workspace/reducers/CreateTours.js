import { CREATE_TOUR_SUBMIT, CREATE_TOUR_ERROR, CREATE_TOUR_RESULT, EDIT_TOUR} from '../actions/CreateTours';


const initialState = {
	email: '',
	authentication_token: '',
	result: '',
	errors: '',
	tourInfo: {
	    city: '',
	    title: '',
	    duration: '',
	    description: '',
	    tourID: '',
	 	max_persons: '',
	 	is_daytrip: '',
        is_foodie: '',
        is_landmarks: '',
        is_museums: '',
        is_nightlife: '',
        is_outdoors: '', 
        price: '',
	}

};



const reducer = (state = initialState, action) => {
switch(action.type) {
    case CREATE_TOUR_SUBMIT:
        return {
            ...state,
            email: action.email,
            authentication_token: action.authentication_token,
            tourInfo: action.tourInfo
        }
    case CREATE_TOUR_ERROR:
        return {
            ...state,
            errors: action.errors
        }
    case CREATE_TOUR_RESULT:
        return {
            ...state,
            result: action.result
        }
    case EDIT_TOUR:
    return {
        ...state,
        tourInfo: action.tourInfo
    }
    
    default:
        return state;
}
};

export default reducer;