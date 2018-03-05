import { takeEvery, select, call, put } from 'redux-saga/effects';

import { REGISTER_SUBMIT, REGISTER_RESULT, REGISTER_ERROR } from '../actions/Register';
import { LOGIN_SUBMIT, INITIAL_LOGIN_CHECK, LOGIN_ERROR, LOGIN_RESULT} from '../actions/Login';

const postRegister = traveler => fetch('http://odyssey-demo.herokuapp.com/', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Traveler: {traveler}
    }),
});

const postLogin = traveler => fetch('http://odyssey-demo.herokuapp.com/', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Traveler: {traveler}
    }),
});


function* tryRegisterUser(action) {
    //let user = action.user;
    //const response = yield call(postRegister, user);
    //const result = yield response.json();

    try {
        let traveler = action.user;
        
        const response = yield call(postRegister, traveler);
        const result = yield response.json();

        if (result.error) {
            yield put({ type: REGISTER_ERROR, errors: result.error });
        } else {
            yield put({ type: REGISTER_RESULT, result})
        }
    } catch (e) {
        console.log(e.message)
        
        yield put({ type: REGISTER_ERROR, errors: e.message });
    }

}

function* tryLoginUser(action) {

    try {
        let traveler = action.user;
        const response = yield call(postLogin, traveler);
        const result = yield response.json();

        if (result.error) {
            yield put({ type: LOGIN_ERROR, errors: result.error });
        } else {
            yield put({ type: LOGIN_RESULT, result})
        }
    } catch (e) {
        console.log(e.message)

        yield put({ type: LOGIN_ERROR, errors: e.message})
    }
    
}

export default function* rootSaga() {
    yield takeEvery(REGISTER_SUBMIT, tryRegisterUser)
    yield takeEvery(LOGIN_SUBMIT, tryLoginUser)
}