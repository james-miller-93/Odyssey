export const ACTIVE_RESERVATION_CHECK_TOURIST = 'ACTIVE_RESERVATION_CHECK_TOURIST';
export const ACTIVE_RESERVATION_CHECK_TOUR_GUIDE = 'ACTIVE_RESERVATION_CHECK_TOUR_GUIDE';
export const ACTIVE_RESERVATION_ERROR = 'ACTIVE_RESERVATION_ERROR';
export const ACTIVE_RESERVATION_RESULT = 'ACTIVE_RESERVATION_RESULT';
export const ACTIVE_RESERVATION_ACCEPT = 'ACTIVE_RESERVATION_ACCEPT';
export const ACTIVE_RESERVATION_DECLINE = 'ACTIVE_RESERVATION_DECLINE';
export const ACTIVE_RESERVATION_ACTION_RESULT = 'ACTIVE_RESERVATION_ACTION_RESULT';
export const ACTIVE_RESERVATION_ACTION_ERROR = 'ACTIVE_RESERVATION_ACTION_ERROR';


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

export const acceptActiveReservation = (reservationID,authentication_token,email) => ({
    type: ACTIVE_RESERVATION_ACCEPT,
    reservationID,
    authentication_token,
    email,
});

export const declineActiveReservation = (reservationID,authentication_token,email) => ({
    type: ACTIVE_RESERVATION_DECLINE,
    reservationID,
    authentication_token,
    email,
})