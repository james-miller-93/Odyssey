import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground, Image } from 'react-native';

import { Container, Top, ContainerLogo } from '../components/Container';
import { GeneralTextInput } from '../components/TextInput';
import { BigLogo } from '../components/Logo';
import { ButtonText } from '../components/Button';


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
        style={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '#5D87A8'
        }}
        source={require('../assets/images/odyssey.png')}
        
        >
        <KeyboardAvoidingView 
        behavior={'padding'}
        style={{
        height: '80%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        }}
        >
        <View
        style={{
            height: '50%',
            width: '100%',
        }}
        />
        <GeneralTextInput
            displayText={'Username'}
            handleTextChange={(val) => this.setState({username: val})}
        />
        <View
        style={{
            height: '4%',
            width: '100%',
        }}
        />
        <GeneralTextInput
            displayText={'Password'}
            handleTextChange={(val) => this.setState({password: val})}
            secure={true}
        />
        
        </KeyboardAvoidingView>
        
        
        <ButtonText 
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