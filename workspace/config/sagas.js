import { throttle, take, takeEvery, takeLatest, select, call, put } from 'redux-saga/effects';

import { REGISTER_SUBMIT, REGISTER_RESULT, REGISTER_ERROR } from '../actions/Register';
import { LOGIN_SUBMIT, LOGIN_ERROR, LOGIN_RESULT} from '../actions/Login';
import { INITIAL_LOGIN_CHECK, INITIAL_LOGIN_ERROR, INITIAL_LOGIN_RESULT } from '../actions/InitialLogin';
import { TOUR_LOCATION, TOUR_RESULT, TOUR_ERROR } from '../actions/TourList';
import { LOGOUT_CHECK, LOGOUT_ERROR, LOGOUT_RESULT } from '../actions/LogOut';
import { VIEW_PROFILE_CHECK, VIEW_PROFILE_ERROR, VIEW_PROFILE_RESULT, VIEW_ACTIVE_PROFILE_CHECK, VIEW_ACTIVE_PROFILE_ERROR, VIEW_ACTIVE_PROFILE_RESULT } from '../actions/ViewProfile';
import { RESERVATION_CHECK, RESERVATION_ERROR, RESERVATION_RESULT } from '../actions/Reservation';
import { ACTIVE_RESERVATION_CHECK_TOUR_GUIDE, ACTIVE_RESERVATION_CHECK_TOURIST,
     ACTIVE_RESERVATION_ERROR, ACTIVE_RESERVATION_RESULT,
    ACTIVE_RESERVATION_ACCEPT, ACTIVE_RESERVATION_DECLINE,
    ACTIVE_RESERVATION_ACTION_RESULT, ACTIVE_RESERVATION_ACTION_ERROR } from '../actions/ActiveReservation';
import { MY_PROFILE_CHECK, MY_PROFILE_ERROR, MY_PROFILE_RESULT } from '../actions/MyProfile';
import { CREATE_TOUR_SUBMIT, CREATE_TOUR_ERROR, CREATE_TOUR_RESULT, EDIT_TOUR_SUBMIT } from '../actions/CreateTours';
import { UPDATE_ACTIVE_SWITCH, ACTIVE_SWITCH_ERROR, ACTIVE_SWITCH_RESULT} from '../actions/IsActive';
import { SUBMIT_PAYMENT, PAYMENT_ERROR, PAYMENT_RESULT} from '../actions/Payments';
import { VIEW_TOURS_CHECK, VIEW_TOURS_RESULT, VIEW_TOURS_ERROR, VIEW_TOURS_DELETE, VIEW_TOURS_DELETE_ERROR, VIEW_TOURS_DELETE_RESULT } from '../actions/ViewTours';
import {UPDATE_ACCOUNT_SUBMIT, UPDATE_ACCOUNT_ERROR, UPDATE_ACCOUNT_RESULT, UPDATE_ACCOUNT} from '../actions/UpdateAccount';

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

//const getTourList = location => fetch('http://odyssey-api-demo.herokuapp.com/v1/tours', {
const getTourList = location => fetch('http://odyssey-api-demo.herokuapp.com/v1/travelers', {    
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
//
const getProfile = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/travelers/'+action.profileID, {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
    },
    body: ''
});

const postReservation = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/reservations/', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
    },
    body: JSON.stringify({
        'tour_id': action.tourID,
        'start_date': action.dateTime
    }),
});

const getReservationTourist = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/reservations', {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
        'id': action.ID
    },
    body: ''
});

const getReservationTourGuide = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/reservations/requests', {
    method: 'GET',
    headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
        'id': action.ID
    },
    body: ''
});

const getMyProfile = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/travelers/getid', {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
    },
    body: ''
});


//still need to get url
const postTour = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/tours/', {

     method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
    },
    //ask backend
    body: JSON.stringify({
        'tour': action.tourInfo,
    }),
});

const patchTour = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/tours/'+action.tourInfo.tourID, {

     method: 'PATCH',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
    },
    //ask backend
    body: JSON.stringify({
        'tour': action.tourInfo,
    }),
});



const postAcceptRequest = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/reservations/'+action.reservationID+'/approve', {

    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
    },
    body: JSON.stringify({
        'reservation': {
            'status': 'Approved'
        }
    }),
});

const postDeclineRequest = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/reservations/'+action.reservationID+'/decline', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
    },
    body: JSON.stringify({
        'reservation': {
            'status': 'Declined'
        }
    }),
});

const getTours = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/listings', {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
    },
    body: ''
});

const getActiveProfile = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/tours', {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
        'traveler_id': action.profileInfo.id
    },
    body: ''
});


const updateAvailibility = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/travelers/'+action.id, {
    method: 'PATCH',
     headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
    },
    body: JSON.stringify({
    "traveler": {
        'active': action.active,
        'latitude': action.location.latitude,
        'longitude': action.location.longitude,
        }
    })
});

const deleteTours = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/tours/'+action.deleteTourID, {
    method: 'DELETE',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
    },
    body: ''
});


const postPayment = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/payments', {
    method: 'POST',
     headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
    },
    body: JSON.stringify({
        'id': action.id,
        'stripe_token': action.token,
    })
});

const updateAccount = action => fetch('http://odyssey-api-demo.herokuapp.com/v1/travelers/'+action.id, {
    method: 'PATCH',
     headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Traveler-Token': action.authentication_token,
        'X-Traveler-Email': action.email,
    },
    body: JSON.stringify({
    "traveler": {
        'description': action.userInfo.description,
        'city': action.userInfo.city,
        'phone_number': action.userInfo.phone_number

        }
    })
});


function* tryInitialLogin(action) {

    try {


        const response = yield call(postInitialLogin, action);
        
        const result = yield response.json();
        

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
        let password = traveler.password;        

        const response = yield call(postLogin, traveler);
        const result = yield response.json();

        console.log("------response------")
        console.log(response)

        console.log("-----result----")
        console.log(result)

        if (result.error) {
            yield put({ type: LOGIN_ERROR, errors: result.error });
        } else {
           
            yield put({ type: LOGIN_RESULT, result: result, authentication_token: result.authentication_token})
        }
    } catch (e) {
        console.log(e.message)

        yield put({ type: LOGIN_ERROR, errors: e.message})
    }
    
}

function* tryTourList(action) {
    try {

        let location = action.value;
        

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


        const response = yield call(deleteLogOut, action);
        
        const result = yield response.json();

        if (result.error) {
            
            yield put({ type: LOGOUT_ERROR, errors: result.error});
        } else {
            
            yield put({ type: LOGOUT_RESULT, result: result});
        }
    } catch(e) {
            yield put({ type: LOGOUT_ERROR, errors: e.message});
    }
}

function* tryViewProfile(action) {


    try {
       
        const response = yield call(getProfile, action);
        console.log('-----------response profile-----');
        console.log('------------------------');
        console.log(response);
        const result = yield response.json();
        

        if (result.error) {
            
            yield put({ type: VIEW_PROFILE_ERROR, errors: result.error});
        } else {
            
            yield put({ type: VIEW_PROFILE_RESULT, result: result});
        }
    } catch(e) {
            yield put({ type: VIEW_PROFILE_ERROR, errors: e.message});
    }
}

function* tryCreateReservation(action) {
    try {
       

        const response = yield call(postReservation, action);
        
        const result = yield response.json();
        //yield put({ type: LOGIN_RESULT, response})

        if (result.error) {
            
            yield put({ type: RESERVATION_ERROR, errors: result.error});
        } else {
            
            yield put({ type: RESERVATION_RESULT, result: result});
        }
    } catch(e) {
            yield put({ type: REGISTER_ERROR, errors: e.message});
    }
}

function* tryActiveReservationTourist(action) {
    try {
        const response = yield call(getReservationTourist, action);
        
        const result = yield response.json();
       

        if (result.error) {
            
            yield put({ type: ACTIVE_RESERVATION_ERROR, errors: result.error});
        } else {
            
            yield put({ type: ACTIVE_RESERVATION_RESULT, result: result});
        }
    } catch(e) {
            yield put({ type: ACTIVE_REGISTER_ERROR, errors: e.message});
    }
}

function* tryActiveReservationTourGuide(action) {
    try {
        const response = yield call(getReservationTourGuide, action);
        
        const result = yield response.json();
  

        if (result.error) {
            
            yield put({ type: ACTIVE_RESERVATION_ERROR, errors: result.error});
        } else {
            
            yield put({ type: ACTIVE_RESERVATION_RESULT, result: result});
        }
    } catch(e) {
            yield put({ type: ACTIVE_REGISTER_ERROR, errors: e.message});
    }
}

function* tryMyProfile(action) {

    try {
        
        const response = yield call(getMyProfile, action);
        
        const result = yield response.json();

        if (result.error) {
            
            yield put({ type: MY_PROFILE_ERROR, errors: result.error});
        } else {
            
            yield put({ type: MY_PROFILE_RESULT, result: result});
        }
    } catch(e) {
            yield put({ type: My_PROFILE_ERROR, errors: e.message});
    }
}

function* tryCreateTours(action) {

    try {
        
        const response = yield call(postTour, action);

        const result = yield response.json();

        if (result.error) {
            

            yield put({ type: CREATE_TOUR_ERROR, errors: result.error});
        } else {
            
            yield put({ type: CREATE_TOUR_RESULT, result: result});
        }
    } catch(e) {
            yield put({ type: CREATE_TOUR_ERROR, errors: e.message});
    }
}

function* tryEditTours(action) {

    try {
        
        const response = yield call(patchTour, action);
        console.log('========action.tourInfo========')
        console.log(action.tourInfo)
        console.log('=========response=======')
        console.log(response)
        const result = yield response.json();

        if (result.error) {
            

            yield put({ type: CREATE_TOUR_ERROR, errors: result.error});
        } else {
            
            yield put({ type: CREATE_TOUR_RESULT, result: result});
        }
    } catch(e) {
            yield put({ type: CREATE_TOUR_ERROR, errors: e.message});
    }
}

        

function* tryAcceptRequest(action) {

    try {
        
        const response = yield call(postAcceptRequest, action);
        console.log('-------------response---------')
        console.log(response)
        const result = yield response.json();

        if (result.error) {
            
            yield put({ type: ACTIVE_RESERVATION_ACTION_ERROR, actionErrors: result.error});
        } else {
            
            yield put({ type: ACTIVE_RESERVATION_ACTION_RESULT, actionResult: result});
        }
    } catch(e) {
            yield put({ type: ACTIVE_RESERVATION_ACTION_ERROR, actionErrors: e.message});
    }
}

function* tryDeclineRequest(action) {

    try {
        
        const response = yield call(postDeclineRequest, action);
        console.log('------response-----------------')
        console.log(response)

        const result = yield response.json();

        if (result.error) {

            yield put({ type: ACTIVE_RESERVATION_ACTION_ERROR, actionErrors: result.error});
        } else {
            
            yield put({ type: ACTIVE_RESERVATION_ACTION_RESULT, actionResult: result});
        }
    } catch(e) {
            yield put({ type: ACTIVE_RESERVATION_ACTION_ERROR, actionErrors: e.message});
    }
}

function* tryViewTours(action) {

    try {
        const response = yield call(getTours, action);
        
        const result = yield response.json();
        
        if (result.error) {
            
            yield put({ type: VIEW_TOURS_ERROR, errors: result.error});
        } else {
            
            yield put({ type: VIEW_TOURS_RESULT, result: result});
        }
    } catch(e) {
            yield put({ type: VIEW_TOURS_ERROR, errors: e.message});
    }
}

function* tryViewActiveProfile(action) {

    try {
        const response = yield call(getActiveProfile, action);
        
        const result = yield response.json();
        
        if (result.error) {
            
            yield put({ type: VIEW_ACTIVE_PROFILE_ERROR, activeErrors: result.error});
        } else {
            
            yield put({ type: VIEW_ACTIVE_PROFILE_RESULT, activeResult: result});
        }
    } catch(e) {
            yield put({ type: VIEW_ACTIVE_PROFILE_ERROR, activeErrors: e.message});
    }
}


function* tryIsActive(action) {

    try {
        console.log('===========ACTION===============')
        console.log(action)
        const response = yield call(updateAvailibility, action);
      
        const result = yield response.json();

   
         if (result.error) {
            

            yield put({ type: ACTIVE_SWITCH_ERROR, errors: result.error});
        } else {
            
            yield put({ type: ACTIVE_SWITCH_RESULT, result: result});
        }
    } catch(e) {
            yield put({ type: ACTIVE_SWITCH_ERROR, errors: e.message});
    }
}
        

function* tryDeleteTours(action) {

    try {
        const response = yield call(deleteTours, action);
        console.log('--------response--------')
        console.log(response)

        const result = yield response.json();
        
        if (result.error) {

            yield put({ type: VIEW_TOURS_DELETE_ERROR, deleteTourErrors: result.error});
        } else {
            
            yield put({ type: VIEW_TOURS_DELETE_RESULT, deleteTourResult: result});
        }
    } catch(e) {
            yield put({ type: VIEW_TOURS_DELETE_ERROR, deleteTourErrors: e.message});
    }
}

function* tryPayment(action) {

    try {
        console.log('===========ACTION===============')
        console.log(action)
        const response = yield call(postPayment, action);
      
        const result = yield response.json();

   
         if (result.error) {
            

            yield put({ type: PAYMENT_ERROR, errors: result.error});
        } else {
            
            yield put({ type: PAYMENT_RESULT, result: result});
        }
    } catch(e) {
            yield put({ type: PAYMENT_ERROR, errors: e.message});
    }
}
function* tryUpdateAcc(action) {

    try {
        
        const response = yield call(updateAccount, action);
        
        //console.log(action.userInfo)
        console.log('=========response=======')
        console.log("lololololololololoololollolololoo"+response)
        const result = yield response.json();

        if (result.error) {
            

            yield put({ type: UPDATE_ACCOUNT_ERROR, errors: result.error});
        } else {
            
            yield put({ type: UPDATE_ACCOUNT_RESULT, result: result});
        }
    } catch(e) {
            yield put({ type: UPDATE_ACCOUNT_ERROR, errors: e.message});
    }
}


export default function* rootSaga() {
    yield takeEvery(INITIAL_LOGIN_CHECK, tryInitialLogin)
    yield takeEvery(REGISTER_SUBMIT, tryRegisterUser)
    yield takeEvery(LOGIN_SUBMIT, tryLoginUser)
    yield takeEvery(TOUR_LOCATION, tryTourList)
    yield takeEvery(LOGOUT_CHECK, tryLogOutUser)
    yield takeEvery(VIEW_PROFILE_CHECK, tryViewProfile)
    yield takeEvery(RESERVATION_CHECK, tryCreateReservation)
    yield takeEvery(ACTIVE_RESERVATION_CHECK_TOURIST, tryActiveReservationTourist)
    yield takeEvery(ACTIVE_RESERVATION_CHECK_TOUR_GUIDE, tryActiveReservationTourGuide)
    yield takeEvery(MY_PROFILE_CHECK, tryMyProfile)
    yield takeEvery(CREATE_TOUR_SUBMIT, tryCreateTours)
    yield takeEvery(EDIT_TOUR_SUBMIT, tryEditTours)
    yield takeEvery(ACTIVE_RESERVATION_ACCEPT, tryAcceptRequest)
    yield takeEvery(ACTIVE_RESERVATION_DECLINE, tryDeclineRequest)
    yield takeEvery(VIEW_TOURS_CHECK, tryViewTours)
    yield takeEvery(VIEW_ACTIVE_PROFILE_CHECK, tryViewActiveProfile)
    yield takeEvery(UPDATE_ACTIVE_SWITCH, tryIsActive)
    yield takeEvery(VIEW_TOURS_DELETE, tryDeleteTours)
    yield takeEvery(SUBMIT_PAYMENT, tryPayment)
    yield takeEvery(UPDATE_ACCOUNT_SUBMIT, tryUpdateAcc)

}