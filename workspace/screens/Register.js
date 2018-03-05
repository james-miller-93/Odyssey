import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground } from 'react-native';

import { Container } from '../components/Container';
import { GeneralTextInput } from '../components/TextInput';
import { ButtonText } from '../components/Button';
import { Errors } from '../components/Errors';
import styles from '../screens/styles';
import { SignUpContainer} from '../components/Container';

export default class Register extends Component {

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

    
    async handleButtonPress() {
        try {
            let response = await fetch('https://secret-eyrie-98674.herokuapp.com/users', {
                method: 'POST',
                headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: {
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password,
                        password_confirmation: this.state.passwordConfirmation,
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
            let formErrors = JSON.parse(errors);
            let errorsArray = [];
            for (let key in formErrors) {
//                if (formErrors[key].length > 1) {
//                    formErrors[key].map(error => errorsArray.push('${key} ${error}'))
//                } else {
//                    errorsArray.push('${key} ${formErrors[key]}')
//                }
                errorsArray.push('$key' + '$formErrors[key]');
            };
            this.setState({errors: errorsArray});
        };
    };
    
/*
    handleButtonPress = () => {
        this.props.navigation.navigate('Home');
    };
*/

    



    render() {
        return (

        <ImageBackground
            style={styles.loginBackground}
            source={require('../assets/images/LoginCover.jpg')}
        >
     
        <View
            style={styles.transparentCover}
            >

            <SignUpContainer/>

        </View>

        </ImageBackground>


















       /*     <Container>
                <KeyboardAvoidingView
                behavior={'padding'}
                style={{
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >
                <GeneralTextInput
                    displayText={'Name'}
                    handleTextChange={(val) => this.setState({name: val})}
                />
                <Errors error={this.state.errors}/>
                <GeneralTextInput
                    displayText={'Email'}
                    handleTextChange={(val) => this.setState({email: val})}
                />
                <GeneralTextInput
                    displayText={'Password'}
                    handleTextChange={(val) => this.setState({password: val})}
                    secure={true}
                />
                <GeneralTextInput
                    displayText={'Confirm Password'}
                    handleTextChange={(val) => this.setState({passwordConfirmation: val})}
                    secure={true}
                />
                
                </KeyboardAvoidingView>

                <ButtonText 
                    displayText = {'Register'}
                    onPress={this.handleButtonPress.bind(this)}
                    />

                

                

            </Container>*/
        );
    };
};