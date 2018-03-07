import { combineReducers } from 'redux';

import Register from './Register';
import Login from './Login';
import InitialLogin from './InitialLogin';
import TourList  from './TourList';

export default combineReducers({
    Register,
    Login,
    InitialLogin,
    TourList
});