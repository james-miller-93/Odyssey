export const VIEW_PROFILE_CHECK = 'VIEW_PROFILE_CHECK';
export const VIEW_PROFILE_ERROR = 'VIEW_PROFILE_ERROR';
export const VIEW_PROFILE_RESULT = 'VIEW_PROFILE_RESULT';
export const VIEW_PROFILE_CLEAR = 'VIEW_PROFILE_CLEAR';
export const VIEW_PROFILE_TOURS = 'VIEW_PROFILE_TOURS';
export const VIEW_ACTIVE_PROFILE_CHECK = 'VIEW_ACTIVE_PROFILE_CHECK';
export const VIEW_ACTIVE_PROFILE_ERROR = 'VIEW_ACTIVE_PROFILE_ERROR';
export const VIEW_ACTIVE_PROFILE_RESULT = 'VIEW_ACTIVE_PROFILE_RESULT';


export const pressProfileView = (profileID,authentication_token,email,tourInfo) => ({
    type: VIEW_PROFILE_CHECK,
    profileID,
    authentication_token,
    email,
    tourInfo
});

export const clearViewProfile = () => {
    type: VIEW_PROFILE_CLEAR
}

export const pressActiveProfileView = (profileInfo,authentication_token,email) => ({
    type: VIEW_ACTIVE_PROFILE_CHECK,
    profileInfo,
    authentication_token,
    email
})