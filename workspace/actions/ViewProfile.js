export const VIEW_PROFILE_CHECK = 'VIEW_PROFILE_CHECK';
export const VIEW_PROFILE_ERROR = 'VIEW_PROFILE_ERROR';
export const VIEW_PROFILE_RESULT = 'VIEW_PROFILE_RESULT';


export const pressProfileView = (profileID,authentication_token,email,tourInfo) => ({
    type: VIEW_PROFILE_CHECK,
    profileID,
    authentication_token,
    email,
    tourInfo
});