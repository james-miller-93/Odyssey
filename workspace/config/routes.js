import { StackNavigator } from 'react-navigation';

import Filter from '../screens/Filter';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Settings from '../screens/Settings';
import TourGuide from '../screens/TourGuide';
import SignIn from '../screens/SignIn';
import UserRole from '../screens/UserRole';
import Loading from '../screens/Loading';
import HomeAlternate from '../screens/HomeAlternate';
import UserProfile from '../screens/UserProfile';
import Test from '../screens/Test';
import Notifications from '../screens/Notifications';
import Requests from '../screens/Requests';
import MyGuideProfile from '../screens/MyGuideProfile';
import MyTouristProfile from '../screens/MyTouristProfile';
import UpdateAccount from '../screens/UpdateAccount';
import ManageTours from '../screens/ManageTours';
import CreateTours from '../screens/CreateTours';


export default StackNavigator({
    /*Test: {
        screen: Test,
        navigationOptions: {
            header: () => null,
        }
    },*/

    Loading: {
        screen: Loading,
        navigationOptions: {
            header: () => null
        }
    },

      CreateTours: {
        screen: CreateTours,
        navigationOptions: {
            header: () => null,
        }
    },

    MyGuideProfile: {
        screen: MyGuideProfile,
        navigationOptions: {
            header: () => null,
        }
    },

  

  
    ManageTours: {
        screen: ManageTours,
        navigationOptions: {
            header: () => null,
        }
    },
    UpdateAccount: {
        screen: UpdateAccount,
        navigationOptions: {
            header: () => null,
        }
    },

    

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

    MyGuideProfile: {
        screen: MyGuideProfile,
        navigationOptions: {
            header: () => null,
        }
    },

    MyTouristProfile: {
        screen: MyTouristProfile,
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
    UserRole: {
        screen: UserRole,
        navigationOptions: {
            header: () => null,
        }
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