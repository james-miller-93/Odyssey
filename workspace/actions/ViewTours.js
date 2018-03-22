export const VIEW_TOURS_CHECK = 'VIEW_TOURS_CHECK';
export const VIEW_TOURS_RESULT = 'VIEW_TOURS_RESULT';
export const VIEW_TOURS_ERROR = 'VIEW_TOURS_ERROR';
export const VIEW_TOURS_DELETE = 'VIEW_TOURS_DELETE';
export const VIEW_TOURS_DELETE_ERROR = 'VIEW_TOURS_DELETE_ERROR';
export const VIEW_TOURS_DELETE_RESULT = 'VIEW_TOURS_DELETE_RESULT';

export const viewTours = (authentication_token,email) => ({
    type: VIEW_TOURS_CHECK,
    authentication_token,
    email
})

export const deleteTours = (authentication_token,email,deleteTourID) => ({
    type: VIEW_TOURS_DELETE,
    authentication_token,
    email,
    deleteTourID
})