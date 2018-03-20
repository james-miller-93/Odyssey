export const MY_PROFILE_CHECK = 'MY_PROFILE_CHECK';
export const MY_PROFILE_ERROR = 'MY_PROFILE_ERROR';
export const MY_PROFILE_RESULT = 'MY_PROFILE_RESULT';
export const MY_PROFILE_SET = 'MY_PROFILE_SET';


export const pressMyProfile = (authentication_token,email) => ({
    type: MY_PROFILE_CHECK,
    authentication_token,
    email
});

export const setMyProfile = (myProfile) => ({
    type: MY_PROFILE_SET,
    myProfile
})
