import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { GeneralTextInput } from '../components/TextInput';
import { ButtonText } from '../components/Button';
import { Errors } from '../components/Errors';
import styles from '../screens/styles';
import { SignInContainer} from '../components/Container';
import { connectAlert } from '../components/Alert';
import { changeLoginEmailValue, changeLoginPasswordValue,
        pressLoginSubmit, checkInitialLogin,
         cleanLoginErrorLog } from '../actions/Login';


class SignIn extends Component {

    //initializes state params to empty strings
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

    //checks if the object received back from backend is an error or valid result
    async componentWillReceiveProps(nextProps) {
        if (nextProps.errors && nextProps.errors !== this.props.errors) {
            this.props.alertWithType('error','Error',nextProps.errors);
            
        } else if (nextProps.token && nextProps.token !== this.props.token) {
            try {
                AsyncStorage.setItem('authentication_token', nextProps.token);
                AsyncStorage.setItem('email',nextProps.email)
                this.props.navigation.navigate('UserRole');
            } catch(e) {
                console.log(e)
            }
        }
    }

    //updates email and pass in store then verify if they're correct
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
            emailChange={this.handleEmailChange}
            passwordChange={this.handlePassChange}
            role = {this.handleTransitionPress.bind(this)}
            navigation={this.props.navigation}
            />

        </View>

        </ImageBackground>

        );
    };
};

//map states in reducers to props in this screen
const mapStateToProps = (state) => {
    const user = {
        email: state.Login.email,
        password: state.Login.password
    };

    const errors = state.Login.errors;
    const token = state.Login.authentication_token;
    const email = state.Login.email

    return {
        user,
        errors,
        token,
        email
    };
};

export default connect(mapStateToProps)(connectAlert(SignIn));