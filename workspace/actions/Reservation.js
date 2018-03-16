export const RESERVATION_CHECK = 'RESERVATION_CHECK';
export const RESERVATION_ERROR = 'RESERVATION_ERROR';
export const RESERVATION_RESULT = 'RESERVATION_RESULT';


export const submitNewReservation = (dateTime,tourID,authentication_token,email) => ({
    type: RESERVATION_CHECK,
    dateTime,
    tourID,
    authentication_token,
    email,
});