import { StackNavigator , DrawerNavigator} from 'react-navigation';

import Filter from '../screens/Filter';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Settings from '../screens/Settings';
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
import Payments from '../screens/Payments';
import TourPage from '../screens/TourPage';



export default DrawerNavigator({



    TourPage: {
        screen: TourPage,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'
        }
    },

Loading: {
        screen: Loading,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'
        }
    },



    

    
    

     Payments: {
        screen: Payments,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'
        }
    },
    
   

    HomeAlternate: {
        screen: HomeAlternate,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'

        }
    },
      UserRole: {
        screen: UserRole,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'

        }
    },

      CreateTours: {
        screen: CreateTours,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'
        }
    },
  
  
    ManageTours: {
        screen: ManageTours,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'
        }
    },
    UpdateAccount: {
        screen: UpdateAccount,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'
        }
    },

    

    Requests: {
        screen: Requests,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'
        }

    },

    Notifications: {
        screen: Notifications,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'
        }
    },


    

    MyGuideProfile: {
        screen: MyGuideProfile,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'
        }
    },

    MyTouristProfile: {
        screen: MyTouristProfile,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'
        }
    },
   
   
    Login: {
        screen: Login,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'
        },
    },   

    SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'
        }
    },

    UserProfile: {

        screen: UserProfile,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'
        }
        
    },
    UserRole: {
        screen: UserRole,
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'
        }
    },
    
    Filter: {
        screen: Filter,
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
            drawerLockMode: 'locked-closed'
        },
    },
    
    
    Register: {
        navigationOptions: {
            header: () => null,
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed'
        },
        screen: Register
        
    },
    Settings: {
        screen: Settings,
    },
    
});