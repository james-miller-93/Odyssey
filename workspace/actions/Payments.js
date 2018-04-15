export const SUBMIT_PAYMENT = 'SUBMIT_PAYMENT';
export const PAYMENT_ERROR = 'PAYMENT_ERROR';
export const PAYMENT_RESULT = 'PAYMENT_RESULT';


export const submitPaymentInfo = (authentication_token,email,token) => ({
    type: SUBMIT_PAYMENT,
    authentication_token,
    email,
    token,
});

export const createResult = () => {
    type: PAYMENT_RESULT
}
