import React, { Component } from 'react';
import { Button,View, Text, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { GeneralTextInput } from '../components/TextInput';
import { ButtonText } from '../components/Button';
import { Errors } from '../components/Errors';
import styles from '../screens/styles';
import { SignUpContainer} from '../components/Container';
import { connectAlert } from '../components/Alert';
//import Swiper from 'react-native-swiper';

import { changeRegisterFirstNameValue, changeRegisterLastNameValue, changeRegisterEmailValue,
        changeRegisterPasswordValue, changeRegisterPasswordConfirmationValue,
        pressRegisterSubmit, clearErrorLog} from '../actions/Register';

class Register extends Component {

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
     


    componentWillReceiveProps(nextProps) {
        if (nextProps.errors && nextProps.errors !== this.props.errors) {
            const emailError = '';
            const passError = '';
            try {
                emailError = nextProps.errors.email[0];
            } catch(e) {
                emailError = ''
                console.log('no email error')
            }
            try {
                passError = nextProps.errors.password[0];
            } catch(e) {
                passError = ''
                console.log('no password error')
            }
            allErrors = ''
            if (emailError !== '') {
                if (passError !== '') {
                    allErrors= 'Email ' + emailError + ', ' + 'Password ' + passError
                } else {
                    allErrors = 'Email ' + emailError
                }
            } else {
                allErrors = 'Password ' + passError
            }
            this.props.alertWithType('error','Error',allErrors);
        } else if (nextProps.result && nextProps.result !== this.props.result) {
            console.log('-----success------')
            this.props.alertWithType('success','Success','Registration successful')
        }
    }
    
    handleFirstNameChange = (text) => {
        this.props.dispatch(clearErrorLog())
        this.props.dispatch(changeRegisterFirstNameValue(text))
    };

    handleLastNameChange = (text) => {
        this.props.dispatch(clearErrorLog())
        this.props.dispatch(changeRegisterLastNameValue(text))
    };

    handleEmailChange = (text) => {
        this.props.dispatch(clearErrorLog())
        this.props.dispatch(changeRegisterEmailValue(text))
    };

    handlePassChange = (text) => {
        this.props.dispatch(clearErrorLog())
        this.props.dispatch(changeRegisterPasswordValue(text))
    };

    handlePassConfChange = (text) => {
        this.props.dispatch(clearErrorLog())
        this.props.dispatch(changeRegisterPasswordConfirmationValue(text))
    };

    handleSubmitPress = () => {
        this.props.dispatch(pressRegisterSubmit(this.props.user))
        this.props.dispatch(clearErrorLog())
    };



    render() {
        return (

        <ImageBackground
            style={styles.loginBackground}
            source={require('../assets/images/LoginCover.jpg')}
        >
     
        <View
            style={styles.transparentCover}
            >

            <SignUpContainer
            firstname={this.handleFirstNameChange}
            lastname={this.handleLastNameChange}
            email={this.handleEmailChange}
            password={this.handlePassChange}
            passwordConfirm={this.handlePassConfChange}
            handlePress={this.handleSubmitPress}/>

        

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

const mapStateToProps = (state) => {
    const user = {
        firstname: state.Register.firstname,
        lastname: state.Register.lastname,
        email: state.Register.email,
        password: state.Register.password,
        password_confirmation: state.Register.passwordConfirmation
    }
    //const name = state.Register.name;
    //const email = state.Register.email;
    //const password = state.Register.password;
    //const passwordConfirmation = state.Register.passwordConfirmation;
    const errors = state.Register.errors;
    const result = state.Register.result;

    return {
        user,
        errors,
        result
    };
};

export default connect(mapStateToProps)(connectAlert(Register));