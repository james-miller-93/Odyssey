import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground, Image } from 'react-native';

import { Container, Top, ContainerLogo } from '../components/Container';
import { GeneralTextInput } from '../components/TextInput';
import { BigLogo } from '../components/Logo';
import { ButtonText } from '../components/Button';
import styles from '../screens/styles';


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: []
        }
    }

    handleSubmitPress = () => {
        this.props.navigation.navigate('Home');
    };

    handleRegisterPress = () => {
        this.props.navigation.navigate('Register');
    };

    /*
    async handleButtonPress() {
        try {
            let response = await fetch('', {
                method: '',
                headers: {
                        '': '',
                        '': '',
                },
                body: JSON.stringify({
                    user: {
                        username: this.state.username,
                        password: this.state.password,
                    }
                })
            });

            let res = await response.text();

            if (response.status >= 200 && response.status < 300) {
                //sucess
            } else {
                //error
                let errors = res;
                throw errors;
            }
        } catch(errors) {
            let formErrors = JSON.parse(erros);
            let errorsArray = [];
            for (let key in formErrors) {
                if (formErrors[key].length > 1) {
                    formErrors[key].map(error => errorsArray.push('${key} ${error}'))
                } else {
                    errorsArray.push('${key} ${formErrors[key]}')
                }
            }
            this.setState({errors: errorsArray})
        }
    }
    */

    render() {
        return (
    
        <ImageBackground
        style={styles.loginBackground}
        source={require('../assets/images/odyssey.png')}
        
        >
        <KeyboardAvoidingView 
        behavior={'padding'}
        style={styles.loginKeyboard}
        >
        <View
        style={styles.loginTopPadding}
        />
        <GeneralTextInput
            displayText={'Username'}
            handleTextChange={(val) => this.setState({username: val})}
        />
        <View
        style={styles.loginTextPadding}
        />
        <GeneralTextInput
            displayText={'Password'}
            handleTextChange={(val) => this.setState({password: val})}
            secure={true}
        />
        
        </KeyboardAvoidingView>
        
        
        <ButtonText 
            buttonColor={{
                backgroundColor: '#ffffff'
            }}
            displayText = {'Submit'}
            handlePress={this.handleSubmitPress.bind(this)}
        />
       
       
        
        </ImageBackground>

    
    
        );
    };

/*
    const Errors = (props) => {
        return (
            <View>
                {props.errors.map((error,))}
            </View>
        )
    }
*/
};

/*
<ButtonText 
            displayText = {'Not registered?'}
            onPress={this.handleRegisterPress.bind(this)}
        />
        */