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
<<<<<<< HEAD
import CreateTours from './CreateTours'
=======
import ViewTours from './ViewTours';
>>>>>>> 4e7282d94ce338a37660bfb3354203eb71ee9b7d

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
<<<<<<< HEAD
    CreateTours,
=======
    ViewTours
>>>>>>> 4e7282d94ce338a37660bfb3354203eb71ee9b7d
});