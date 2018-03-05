import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground } from 'react-native';

import { Container , UserRoleContainer, SignUpContainer} from '../components/Container';
import { GeneralTextInput } from '../components/TextInput';
import { ButtonText } from '../components/Button';
import { Errors } from '../components/Errors';
import styles from '../screens/styles';

export default class Transition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            error: []
        }
    }



    render() {
        return (

        <ImageBackground
            style={styles.loginBackground}
            source={require('../assets/images/LoginCover.jpg')}
        >
     
        <View
            style={styles.transparentCover}
        >

            <UserRoleContainer/>

        </View>

        </ImageBackground>




        );
    };
};