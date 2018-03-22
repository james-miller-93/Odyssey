export const UPDATE_ACTIVE_SWITCH = 'UPDATE_ACTIVE_SWITCH';
export const ACTIVE_SWITCH_ERROR = 'ACTIVE_SWITCH_ERROR';
export const ACTIVE_SWITCH_RESULT = 'ACTIVE_SWITCH_RESULT';


export const isActiveUpdate = (authentication_token,email,active,id) => ({
    type: UPDATE_ACTIVE_SWITCH,
    authentication_token,
    email,
    active,
    id,
});


