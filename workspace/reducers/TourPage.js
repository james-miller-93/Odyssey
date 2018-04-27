import { GET_TOUR } from '../actions/TourPage';


const initialState = {
	
	currentTour : {
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
    case GET_TOUR:
        return {
            ...state,
            currentTour: action.currentTour
        }
    default:
        return state;
}
};

export default reducer;
