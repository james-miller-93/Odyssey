export const GET_TOUR = 'GET_TOUR';



export const getCurrentTour = (currentTour) => ({
    type: GET_TOUR,
    currentTour
});