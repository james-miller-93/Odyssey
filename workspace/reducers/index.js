import { combineReducers } from 'redux';

import Register from './Register';
import Login from './Login';
import InitialLogin from './InitialLogin';
import TourList  from './TourList';
import LogOut from './LogOut';
import ViewProfile from './ViewProfile';
import Reservation from './Reservation';
import ActiveReservation from './ActiveReservation';
import MyProfile from './MyProfile';

import CreateTours from './CreateTours';

import ViewTours from './ViewTours';


export default combineReducers({
    Register,
    Login,
    InitialLogin,
    TourList,
    LogOut,
    ViewProfile,
    Reservation,
    ActiveReservation,
    MyProfile,
    CreateTours,
    ViewTours

});