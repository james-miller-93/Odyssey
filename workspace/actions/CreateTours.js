export const CREATE_TOUR_SUBMIT = 'CREATE_TOUR_SUBMIT';
export const CREATE_TOUR_ERROR = 'CREATE_TOUR_ERROR';
export const CREATE_TOUR_RESULT = 'CREATE_TOUR_RESULT';
export const EDIT_TOUR_SUBMIT = 'EDIT_TOUR_SUBMIT';
export const EDIT_TOUR = 'EDIT_TOUR';
export const TOUR_MODE = 'TOUR_MODE';

export const createTourSubmit = (authentication_token,email,tourInfo) => ({
    type: CREATE_TOUR_SUBMIT,
    authentication_token,
    email,
    tourInfo,
});

export const editTourSubmit = (authentication_token,email,tourInfo) => ({
    type: EDIT_TOUR_SUBMIT,
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

export const tourMode = (mode) => ({
    type: TOUR_MODE,
    mode
})