import { StackNavigator } from 'react-navigation';

import Filter from '../screens/Filter';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Settings from '../screens/Settings';
import TourGuide from '../screens/TourGuide';
import SignIn from '../screens/SignIn';
import userRole from '../screens/userRole';
import Loading from '../screens/Loading';
import HomeAlternate from '../screens/HomeAlternate';
import UserProfile from '../screens/UserProfile';
import Test from '../screens/Test';
import Notifications from '../screens/Notifications';
import Requests from '../screens/Requests'

export default StackNavigator({
    /*Test: {
        screen: Test,
        navigationOptions: {
            header: () => null,
        }
    },*/

    Requests: {
        screen: Requests,
        navigationOptions: {
            header: () => null
        }

    },
    Notifications: {
        screen: Notifications,
        navigationOptions: {
            header: () => null
        }
    },

    HomeAlternate: {
        screen: HomeAlternate,
        navigationOptions: {
            header: () => null
        }
    },

    UserProfile: {
        screen: UserProfile,
        navigationOptions: {
            header: () => null,
        }
    },

    
   
   
    Login: {
        screen: Login,
        navigationOptions: {
            header: () => null,
        },
    },   
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: () => null,
        }
    },
    SignIn: {
        screen: SignIn,
        
    },
    userRole: {
        screen: userRole
    },
    
    Filter: {
        screen: Filter,
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        },
    },
    
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: () => null,
        },
    },
    
    Register: {
        screen: Register
        
    },
    Settings: {
        screen: Settings,
    },
    TourGuide: {
        screen: TourGuide,
        navigationOptions: {
            header: () => null,
        },
    }
});