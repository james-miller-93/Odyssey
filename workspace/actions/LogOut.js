export const LOGOUT_CHECK = 'LOGOUT_CHECK';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';
export const LOGOUT_RESULT = 'LOGOUT_RESULT';

export const sendLogOutRequest = (authentication_token,email) => ({
    type: LOGOUT_CHECK,
    authentication_token,
    email
});

