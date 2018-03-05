import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { GeneralTextInput } from '../components/TextInput';
import { ButtonText } from '../components/Button';
import { Errors } from '../components/Errors';
import styles from '../screens/styles';
import { SignInContainer} from '../components/Container';
//import { userRole} from '../components/Container';
import { connectAlert } from '../components/Alert';

import { changeLoginEmailValue, changeLoginPasswordValue,
        pressLoginSubmit, checkInitialLogin,
         cleanLoginErrorLog } from '../actions/Login';


class SignIn extends Component {

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

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors && nextProps.errors !== this.props.errors) {
            this.props.alertWithType('error','Error',nextProps.errors);
        }
    }

    handleEmailChange = (text) => {
        this.props.dispatch(cleanLoginErrorLog())
        this.props.dispatch(changeLoginEmailValue(text))
    };

    handlePassChange = (text) => {
        this.props.dispatch(cleanLoginErrorLog())
        this.props.dispatch(changeLoginPasswordValue(text))
    };

    handleTransitionPress = () => {
        this.props.dispatch(pressLoginSubmit(this.props.user))
        this.props.dispatch(cleanLoginErrorLog())
        //this.props.navigation.navigate('userRole');

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

            <SignInContainer 
            email={this.props.handleEmailChange}
            password={this.props.handlePassChange}
            role = {this.handleTransitionPress.bind(this)}
            />

        </View>

        </ImageBackground>




        );
    };
};

const mapStateToProps = (state) => {
    const user = {
        email: state.Login.email,
        password: state.Login.password
    };

    const errors = state.Login.errors;

    return {
        user,
        errors
    };
};

export default connect(mapStateToProps)(connectAlert(SignIn));