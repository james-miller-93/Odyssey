export const UPDATE_ACCOUNT_ERROR = 'UPDATE_ACCOUNT_ERROR';
export const UPDATE_ACCOUNT_RESULT = 'UPDATE_ACCOUNT_RESULT';
export const UPDATE_ACCOUNT_SUBMIT = 'UPDATE_ACCOUNT_SUBMIT';
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';


export const updateAccountSubmit = (authentication_token,email,userInfo,id) => ({
    type: UPDATE_ACCOUNT_SUBMIT,
    authentication_token,
    email,
    userInfo,
    id,
});

export const updateAccountResult = () => {
    type: UPDATE_ACCOUNT_RESULT
}

export const updateAccount = (userInfo) => ({
	type: UPDATE_ACCOUNT,
	userInfo,
});

