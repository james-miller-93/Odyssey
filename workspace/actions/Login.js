export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const LOGIN_PASSWORD = 'LOGIN_PASSWORD';
export const INITIAL_LOGIN_CHECK = 'INITIAL_LOGIN_CHECK';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';

export const changeLoginEmailValue = value => ({
    type: LOGIN_EMAIL,
    value,
});

export const changeLoginPasswordValue = value => ({
    type: LOGIN_PASSWORD,
    value,
});

export const pressLoginSubmit = () => ({
    type: LOGIN_SUBMIT,
});

export const checkInitialLogin = () => ({
    type: INITIAL_LOGIN_CHECK,
});
