export const CREATE_TOUR_SUBMIT = 'CREATE_TOUR_SUBMIT';
export const CREATE_TOUR_ERROR = 'CREATE_TOUR_ERROR';
export const CREATE_TOUR_RESULT = 'CREATE_TOUR_RESULT';
export const EDIT_TOUR = 'EDIT_TOUR';

export const createTourSubmit = (authentication_token,email,tourInfo) => ({
    type: CREATE_TOUR_SUBMIT,
    authentication_token,
    email,
    tourInfo,
});

export const createTourResult = () => {
    type: CREATE_TOUR_RESULT
}

export const editTours = (tourInfo) => ({
	type: EDIT_TOUR,
	tourInfo,
});