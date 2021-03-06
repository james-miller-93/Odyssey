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
import { LinearGradient } from 'expo';

class UserRole extends Component {

//initializes the state params to empty strings
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


    //gets the information from the backend and updates the store if successful and checks if an error was received
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

                    city: res.traveler.city,
                    image: res.traveler.image,

                    latitude: res.traveler.latitude,
                    longitude: res.traveler.longitude

                }
                this.props.dispatch(setMyProfile(myProfileInfo))
                this.props.dispatch(viewTours(this.state.authentication_token,this.state.email))
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

    //updates the states and store
    onTravelerPress = () => {
        this.setState({ mode: 'traveler', rolePage: true})
        this.props.dispatch(pressMyProfile(this.state.authentication_token,this.state.email))
       
    }

    onLocalPress = () => {
        this.setState({ mode: 'local', rolePage: true})
        this.props.dispatch(pressMyProfile(this.state.authentication_token,this.state.email))
    }

    render() {
        return (

        <LinearGradient colors={[ '#C67171', '#fb9481', '#EE9572', '#FF9955', '#EE7942']} start={[0, 0]}
            end={[1, 1]} style={[ 
            {
              width: 400,
              height: 340,
            },
            styles.headerBackgroundImage]}>

     
        <View>

            <UserRoleContainer
            handleTravelerPress={this.onTravelerPress}
            handleLocalPress={this.onLocalPress}
            />

        </View>

        </LinearGradient>




        );
    };
};

//maps the states in the reducers to the props in this screen
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