export const INITIAL_LOGIN_CHECK = 'INITIAL_LOGIN_CHECK';
export const INITIAL_LOGIN_ERROR = 'INITIAL_LOGIN_ERROR';
export const INITIAL_LOGIN_RESULT = 'INITIAL_LOGIN_RESULT';


export const checkInitialLogin = (authentication_token,email) => ({
    type: INITIAL_LOGIN_CHECK,
    authentication_token,
    email
});