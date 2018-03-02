import { StackNavigator } from 'react-navigation';

import Filter from '../screens/Filter';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Settings from '../screens/Settings';
import TourGuide from '../screens/TourGuide';

export default StackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: () => null,
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: () => null,
        },
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
        screen: Register,
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