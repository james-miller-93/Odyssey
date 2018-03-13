import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
//import ImageHeader from 'react-native-image-header';
import { StackNavigator } from 'react-navigation';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';

EStyleSheet.build({
    $secondaryColor: '#F9A602',
    $primaryColor: '#5D87A8',
    $tertiaryColor: '#000000',
    $black: '#000000',
    $white: '#FFFFFF',
    $gray: '#808080',
    $transparentGray: '#80808040',
    $textBar1: 48,
});

export default () => (
    <Provider store={store}>
        <AlertProvider>
            <Navigator />
        </AlertProvider>
    </Provider>
);
