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
        pressRegisterSubmit, clearErrorLog, changeRegisterPhone, changeRegisterCity} from '../actions/Register';

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
                        phone_number: this.state.phone_number,
                        city: this.state.city
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
            this.props.navigation.navigate('SignIn')
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

     handlePhoneChange = (text) => {
        this.props.dispatch(clearErrorLog())
        this.props.dispatch(changeRegisterPhone(text))
    };

     handleLocationChange = (text) => {
        this.props.dispatch(clearErrorLog())
        this.props.dispatch(changeRegisterCity(text))
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
            location={this.handleLocationChange}
            phone={this.handlePhoneChange}
            navigation={this.props.navigation}
            handlePress={this.handleSubmitPress}/>

        

        </View>

        </ImageBackground>



        );
    };
};

const mapStateToProps = (state) => {
    const user = {
        firstname: state.Register.firstname,
        lastname: state.Register.lastname,
        email: state.Register.email,
        password: state.Register.password,
        password_confirmation: state.Register.passwordConfirmation,
        phone_number: state.Register.phone_number,
        city: state.Register.city,
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