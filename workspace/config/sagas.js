import { takeEvery, select, call, put } from 'redux-saga/effects';

import { REGISTER_SUBMIT, REGISTER_RESULT, REGISTER_ERROR } from '../actions/Register';
import { LOGIN_SUBMIT, LOGIN_ERROR, LOGIN_RESULT} from '../actions/Login';
import { INITIAL_LOGIN_CHECK, INITIAL_LOGIN_ERROR, INITIAL_LOGIN_RESULT } from '../actions/InitialLogin';

const postInitialLogin = (authentication_token,email) => fetch('http://odyssey-api-demo.herokuapp.com/api/v1/sessions', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        
    },
    body: JSON.stringify({
        'X-Traveler-Token': authentication_token,
        'X-Traveler-Email': email,
    })
});

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

const postLogin = traveler => fetch('http://odyssey-api-demo.herokuapp.com/api/v1/sessions', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "email": traveler.email,
        "password": traveler.password
    }),
});

function* tryInitialLogin(action) {

    try {
        let authentication_token = action.authentication_token;
        
        let email = action.email;

        console.log("-----------")
        console.log(authentication_token)
        console.log(email)
        console.log("--------------")

        const response = yield call(postInitialLogin, (authentication_token,email));
        console.log(response)
        const result = yield response.json();
        //yield put({ type: LOGIN_RESULT, response})

        if (result.error) {
            console.log('this was an error!!!!')
            yield put({ type: INITIAL_LOGIN_ERROR, initialErrors: result.error});
        } else {
            console.log('no error!!!')
            yield put({ type: INITIAL_LOGIN_RESULT, initialResult: response});
        }
    } catch(e) {
            yield put({ type: INITIAL_LOGIN_ERROR, initialErrors: e.message});
    }
}

function* tryRegisterUser(action) {
    //let user = action.user;
    //const response = yield call(postRegister, user);
    //const result = yield response.json();

    //let traveler = action.user;
    
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
        let email = traveler.email;
        //console.log(email)
        let password = traveler.password;
        //console.log(password)
        
        const response = yield call(postLogin, traveler);
        const result = yield response.json();

        if (result.error) {
            yield put({ type: LOGIN_ERROR, errors: result.error });
        } else {
            //console.log(result.authentication_token)
            yield put({ type: LOGIN_RESULT, authentication_token: result.authentication_token})
        }
    } catch (e) {
        console.log(e.message)

        yield put({ type: LOGIN_ERROR, errors: e.message})
    }
    
}

export default function* rootSaga() {
    yield takeEvery(INITIAL_LOGIN_CHECK, tryInitialLogin)
    yield takeEvery(REGISTER_SUBMIT, tryRegisterUser)
    yield takeEvery(LOGIN_SUBMIT, tryLoginUser)
}