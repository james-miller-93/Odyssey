import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, 
    ImageBackground, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import { Container , UserRoleContainer, SignUpContainer} from '../components/Container';
import { GeneralTextInput } from '../components/TextInput';
import { ButtonText } from '../components/Button';
import { Errors } from '../components/Errors';
import { connectAlert } from '../components/Alert';

import styles from '../screens/styles';

import { pressMyProfile, setMyProfile } from '../actions/MyProfile';
import { pressProfileView, clearViewProfile } from '../actions/ViewProfile'
import { viewTours } from '../actions/ViewTours';

class UserRole extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authentication_token: "",
            email: "",
            mode: '',
            rolePage: true,
        }
    }

    async componentDidMount() {
        let storedToken = await AsyncStorage.getItem('authentication_token')
        let storedEmail = await AsyncStorage.getItem('email')
        this.setState( {
            authentication_token: storedToken,
            email: storedEmail
        })
        this.props.dispatch(pressMyProfile(this.state.authentication_token,this.state.email))
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.myProfileError && nextProps.myProfileError !== this.props.myProfileError) {
            this.props.alertWithType('error','Error',nextProps.myProfileError);
        } else if (nextProps.viewProfileError && nextProps.viewProfileError !== this.props.viewProfileError) {
            this.props.alertWithType('error','Error',nextProps.viewProfileError);
        } else if(nextProps.myProfileResult && nextProps.myProfileResult !== this.props.myProfileResult) {
            const userID = nextProps.myProfileResult[0];
            this.props.dispatch(pressProfileView(userID,this.state.authentication_token,
                this.state.email,''));
        } else if(nextProps.viewProfileResult && nextProps.viewProfileResult !== this.props.viewProfileResult) {
            
            if (this.state.rolePage) {
                const res = nextProps.viewProfileResult
                const myProfileInfo = {
                    firstname: res.traveler.firstname,
                    lastname: res.traveler.lastname,
                    email: res.traveler.email,
                    phone_number: res.traveler.phone_number,
                    city: res.traveler.city
                }
                this.props.dispatch(setMyProfile(myProfileInfo))
                this.props.dispatch(viewTours(this.state.authentication_token,this.state.email))
                //this.props.dispatch(clearViewProfile())
            }
        } else if(nextProps.viewToursError && nextProps.viewToursError !== this.props.viewToursError) {
            this.props.alertWithType('error','Error',nextProps.viewToursError)
        } else if(nextProps.viewToursResult && nextProps.viewToursResult !== this.props.viewToursResult) {
            
            if (this.state.mode === 'traveler') {
                this.props.navigation.navigate('HomeAlternate');
                this.setState({ rolePage: false})
            } else if (this.state.mode === 'local') {
                this.props.navigation.navigate('MyGuideProfile');
                this.setState({ rolePage: false})
            }
            
        }
    }

    onTravelerPress = () => {
        this.setState({ mode: 'traveler', rolePage: true})
        this.props.dispatch(pressMyProfile(this.state.authentication_token,this.state.email))
        //this.props.navigation.navigate('HomeAlternate');
    }

    onLocalPress = () => {
        this.setState({ mode: 'local', rolePage: true})
        this.props.dispatch(pressMyProfile(this.state.authentication_token,this.state.email))
        
        //this.props.navigation.navigate('MyGuideProfile');
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

            <UserRoleContainer
            handleTravelerPress={this.onTravelerPress}
            handleLocalPress={this.onLocalPress}
            />

        </View>

        </ImageBackground>




        );
    };
};

const mapStateToProps = (state) => {

    const myProfileError = state.MyProfile.errors;
    const myProfileResult = state.MyProfile.result;
    
    const viewProfileError = state.ViewProfile.errors;
    const viewProfileResult = state.ViewProfile.result;

    const viewToursError = state.ViewTours.errors;
    const viewToursResult = state.ViewTours.result;

    return {
        myProfileError,
        myProfileResult,
        viewProfileError,
        viewProfileResult,
        viewToursError,
        viewToursResult
    };
};

export default connect(mapStateToProps)(connectAlert(UserRole));