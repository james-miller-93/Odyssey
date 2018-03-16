export const ACTIVE_RESERVATION_CHECK_TOURIST = 'ACTIVE_RESERVATION_CHECK_TOURIST';
export const ACTIVE_RESERVATION_CHECK_TOUR_GUIDE = 'ACTIVE_RESERVATION_CHECK_TOUR_GUIDE';
export const ACTIVE_RESERVATION_ERROR = 'ACTIVE_RESERVATION_ERROR';
export const ACTIVE_RESERVATION_RESULT = 'ACTIVE_RESERVATION_RESULT';


export const checkActiveReservationTourist = (ID,authentication_token,email) => ({
    type: ACTIVE_RESERVATION_CHECK_TOURIST,
    ID,
    authentication_token,
    email,
});

export const checkActiveReservationTourGuide = (ID,authentication_token,email) => ({
    type: ACTIVE_RESERVATION_CHECK_TOUR_GUIDE,
    ID,
    authentication_token,
    email,
});