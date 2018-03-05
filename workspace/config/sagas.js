import { takeEvery, call } from 'redux-saga/effects';

import { REGISTER_SUBMIT } from '../actions/Register';
import { LOGIN_SUBMIT, INITIAL_LOGIN_CHECK} from '../actions/Login';

const postRegister = user => fetch('http://odyssey-demo.herokuapp.com/', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        User: {user}
    }),
});


function* tryRegisterUser(action) {
    let user = action.user;
    const response = yield call(postRegister, user);
    const result = yield response.json();

    /*try {
        let user = action.user;
        const response = yield call(postRegister, user);
        const result = yield response.json();

        if (result.error) {

        } else {

        }
    } catch (e) {
        console.log('Saga error',e);
    }*/

}

export default function* rootSaga() {
    yield takeEvery(REGISTER_SUBMIT, tryRegisterUser)
}