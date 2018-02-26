import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';


import Navigator from './config/routes';

EStyleSheet.build({
    $secondaryColor: '#E59400',
    $primaryColor: '#5D87A8',
    $tertiaryColor: '#000000',
    $black: '#000000',
    $white: '#FFFFFF',
    $gray: '#808080',
    $textBar1: 48,
});

export default () => <Navigator />;
