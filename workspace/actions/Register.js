export const REGISTER_FIRST_NAME = 'REGISTER_FIRST_NAME';
export const REGISTER_LAST_NAME = 'REGISTER_LAST_NAME';
export const REGISTER_EMAIL = 'REGISTER_EMAIL';
export const REGISTER_PASS = 'REGISTER_PASSWORD';
export const REGISTER_PASS_CONF = 'REGISTER_PASSWORD_CONFIRMATION';
export const REGISTER_SUBMIT = 'REGISTER_SUBMIT';

export const REGISTER_RESULT = 'REGISTER_RESULT';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_ERROR_CLEAN = 'REGISTER_ERROR_CLEAN';
export const REGISTER_PHONE = 'REGISTER_PHONE';
export const REGISTER_CITY = 'REGISTER_CITY';


export const changeRegisterFirstNameValue = value => ({
    type: REGISTER_FIRST_NAME,
    value,
});

export const changeRegisterLastNameValue = value => ({
    type: REGISTER_LAST_NAME,
    value,
});

export const changeRegisterEmailValue = value => ({
    type: REGISTER_EMAIL,
    value,
});

export const changeRegisterPasswordValue = value => ({
    type: REGISTER_PASS,
    value,
});

export const changeRegisterPhone = value => ({
    type: REGISTER_PHONE,
    value,
});

export const changeRegisterCity = value => ({
    type: REGISTER_CITY,
    value,
});

export const changeRegisterPasswordConfirmationValue = value => ({
    type: REGISTER_PASS_CONF,
    value,
});

export const pressRegisterSubmit = (user) => ({
    type: REGISTER_SUBMIT,
    user
});

export const clearErrorLog = () => ({
    type: REGISTER_ERROR_CLEAN
});