export const VIEW_TOURS_CHECK = 'VIEW_TOURS_CHECK';
export const VIEW_TOURS_RESULT = 'VIEW_TOURS_RESULT';
export const VIEW_TOURS_ERROR = 'VIEW_TOURS_ERROR';

export const viewTours = (authentication_token,email) => ({
    type: VIEW_TOURS_CHECK,
    authentication_token,
    email
})