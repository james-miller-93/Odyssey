import { TOUR_LOCATION, TOUR_RESULT, TOUR_ERROR } from '../actions/TourList';

const initialState = {
    location: '',
    result: {
        tours: []
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOUR_LOCATION:
            return {
                ...state,
                location: action.value || ''
            };
        case TOUR_RESULT:
            return {
                ...state,
                result: action.result || ''
            };
        case TOUR_ERROR:
            return {
                ...state,
                errors: action.errors
            };
        default:
            return state;
        
    }
};

export default reducer;

