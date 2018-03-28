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
            header: () => null,
            gesturesEnabled: false
        }
    },

    HomeAlternate: {
        screen: HomeAlternate,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false

        }
    },
      UserRole: {
        screen: UserRole,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false

        }
    },

      CreateTours: {
        screen: CreateTours,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false
        }
    },
  
  
    ManageTours: {
        screen: ManageTours,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false
        }
    },
    UpdateAccount: {
        screen: UpdateAccount,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false
        }
    },

    

    Requests: {
        screen: Requests,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false
        }

    },

    Notifications: {
        screen: Notifications,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false
        }
    },


    

    MyGuideProfile: {
        screen: MyGuideProfile,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
        }
    },

    MyTouristProfile: {
        screen: MyTouristProfile,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
        }
    },
   
   
    Login: {
        screen: Login,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false
        },
    },   
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false
        }
    },

    UserProfile: {

        screen: UserProfile,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false
        }
        
    },
    UserRole: {
        screen: UserRole,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
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
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false
        },
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