import { takeEvery, select, call, put } from 'redux-saga/effects';

import { REGISTER_SUBMIT, REGISTER_RESULT, REGISTER_ERROR } from '../actions/Register';
import { LOGIN_SUBMIT, LOGIN_ERROR, LOGIN_RESULT} from '../actions/Login';
import { INITIAL_LOGIN_CHECK, INITIAL_LOGIN_ERROR, INITIAL_LOGIN_RESULT } from '../actions/InitialLogin';
import { TOUR_LOCATION, TOUR_RESULT, TOUR_ERROR } from '../actions/TourList';
import { LOGOUT_CHECK, LOGOUT_ERROR, LOGOUT_RESULT } from '../actions/LogOut';

const postInitialLogin = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/sessions', {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
    },
    body: ''
});

const postRegister = traveler => fetch('http://odyssey-api-demo.herokuapp.com/v1/travelers', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        traveler
    }),
});

const postLogin = traveler => fetch('http://odyssey-api-demo.herokuapp.com/v1/sessions', {
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

const getTourList = location => fetch('http://odyssey-api-demo.herokuapp.com/v1/tours', {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'latitude': location.latitude,
        'longitude': location.longitude,
    },
    body: ''
});

const deleteLogOut = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/sessions', {
    method: 'DELETE',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
    },
    body: ''
});

function* tryInitialLogin(action) {

    try {
        //let authentication_token = action.authentication_token;
        
        //let email = action.email;

        //console.log("-----------")
        //console.log(authentication_token)
        //console.log(email)
        //console.log("--------------")

        const response = yield call(postInitialLogin, action);
        
        const result = yield response.json();
        //yield put({ type: LOGIN_RESULT, response})

        if (result.error) {
            
            yield put({ type: INITIAL_LOGIN_ERROR, initialErrors: result.error});
        } else {
            
            yield put({ type: INITIAL_LOGIN_RESULT, result: result});
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
            
            yield put({ type: REGISTER_RESULT, result: result})
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
            yield put({ type: LOGIN_RESULT, result: result, authentication_token: result.authentication_token})
        }
    } catch (e) {
        console.log(e.message)

        yield put({ type: LOGIN_ERROR, errors: e.message})
    }
    
}

function* tryTourList(action) {
    try {
        //console.log("----------action-------")
        //console.log(action)
        let location = action.value;
        //console.log("------location-----")
        //console.log(location)
        //let latitude = location.latitude;
        //console.log("----latitude-------")
        //console.log(latitude)
        //let longitude = location.longitude;
        //console.log("-----longitude---")
        //console.log(longitude)

        const response = yield call(getTourList, location);
        const result = yield response.json();

        if (result.error) {
            yield put({ type: TOUR_ERROR, errors: result.error });
        } else {
            yield put({ type: TOUR_RESULT, result: result})
        }
    } catch(e) {
        yield put({ type: TOUR_ERROR, errors: e.message})
    }
}

function* tryLogOutUser(action) {

    try {
        //let authentication_token = action.authentication_token;
        
        //let email = action.email;

        //console.log("-----------")
        //console.log(authentication_token)
        //console.log(email)
        //console.log("--------------")

        const response = yield call(deleteLogOut, action);
        
        const result = yield response.json();
        //yield put({ type: LOGIN_RESULT, response})

        if (result.error) {
            
            yield put({ type: LOGOUT_ERROR, errors: result.error});
        } else {
            
            yield put({ type: LOGOUT_RESULT, result: result});
        }
    } catch(e) {
            yield put({ type: LOGOUT_ERROR, errors: e.message});
    }
}


export default function* rootSaga() {
    yield takeEvery(INITIAL_LOGIN_CHECK, tryInitialLogin)
    yield takeEvery(REGISTER_SUBMIT, tryRegisterUser)
    yield takeEvery(LOGIN_SUBMIT, tryLoginUser)
    yield takeEvery(TOUR_LOCATION, tryTourList)
    yield takeEvery(LOGOUT_CHECK, tryLogOutUser)
}