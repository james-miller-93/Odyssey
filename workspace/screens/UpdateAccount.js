import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground , AsyncStorage} from 'react-native';
import { connect } from 'react-redux';

import { Container , SignUpContainer} from '../components/Container';
import { GeneralTextInput } from '../components/TextInput';
import { ButtonText } from '../components/Button';
import { Errors } from '../components/Errors';
import styles from '../screens/styles';
import { UpdateAccountContainer } from '../components/UpdateAccount';
import { updateAccountSubmit} from '../actions/UpdateAccount';
import { connectAlert } from '../components/Alert';
import {setMyProfile} from '../actions/MyProfile';

class UpdateAccount extends Component {


	//Intializing the state and props
    constructor(props) {
        super(props);
        this.state = {
            authentication_token: "",
            email: "",
            userInfo: {
            	city: this.props.userInfo.city,
			    description: this.props.userInfo.description,
			   	phone_number: this.props.userInfo.phone_number,
		        
            },
            profileInfo: {
            	firstname: this.props.profileInfo.firstname,
			    lastname: this.props.profileInfo.lastname,
			    email: this.props.profileInfo.email,
			    phone_number: this.props.profileInfo.phone_number,
			    city: this.props.profileInfo.city,
			    image: this.props.profileInfo.image,
			    description: this.props.profileInfo.description,
			    latitude: this.props.profileInfo.latitude,
			    longitude: this.props.profileInfo.longitude,
			}
      
        }
    }

    //handle when submit button is pressed, could be an edit submit or create tour
    handleSubmitPress = () => {

		this.state.profileInfo = {
			...this.state.profileInfo,
			city: this.state.userInfo.city,
				description: this.state.userInfo.description,
				phone_number: this.state.userInfo.phone_number,
				

		}

        this.props.dispatch(updateAccountSubmit(this.state.authentication_token,this.state.email,this.state.userInfo,this.props.profileID ))
		this.props.dispatch(setMyProfile(this.state.profileInfo))

    };

    //waiting on email and token from backend
     async componentDidMount() {
        let storedToken = await AsyncStorage.getItem('authentication_token')
        let storedEmail = await AsyncStorage.getItem('email')
        this.setState( {
            authentication_token: storedToken,
            email: storedEmail
        })
      };

    //checking if object received from backend is a valid result or error
      componentWillReceiveProps(nextProps) {
  	if (nextProps.errors && nextProps.errors !== this.props.errors) {
  		console.log("------------------------------------------------------------------"+this.props.errors, nextProps.errors)
      this.props.alertWithType('error','Error',nextProps.errors);
  	} else if(nextProps.result && nextProps.result !== this.props.result) {
      console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
   }
      

     if (nextProps.profileError && nextProps.profileError !== this.props.profileError) {
            this.props.alertWithType('error','Error',nextProps.profileError);
        } else //if(nextProps.profileResult && nextProps.profileResult !== this.props.profileResult) 
        {
        	console.log("I'm here ohhhhhohhhhhohhhhhohhhhhohhhhhohhhhhohhhhhohhhhhohhhhhohhhhhohhhhhohhhhhohhhhhohhhhhohhhhhohhhhh")
            this.props.navigation.navigate('MyTouristProfile');
       } 
  	}  
  


	//updating the state depending on the text changed

	newLocation = (text) => {
		const newState = {
			...this.state.userInfo,
			city: text

		}

		this.setState({ userInfo : newState })
	}

	newDescription = (text) => {
		const newState = {
			...this.state.userInfo,
			description: text

		}

		this.setState({ userInfo : newState })
	}

	newPhone = (text) => {

		const newState = {
			...this.state.userInfo,
			phone_number: text

		}

		this.setState({ userInfo : newState })

	}
	
	

  	render() {
        return (

 
 		 <View
            style={styles.generalContainer}         
        >

            <UpdateAccountContainer navigation={this.props.navigation} 
            handleSavePress = {this.handleSubmitPress}
            location= {this.newLocation}
            oldLocation = {this.props.userInfo.city} 
            description = {this.newDescription}
            oldDescription = {this.props.userInfo.description}
            phone= {this.newPhone}
            oldPhone = {this.props.userInfo.phone_number} />
           
          </View>
 		);
	};
};

//a function that maps the states in the reducers to the props in screens
const mapStateToProps = (state) => {
   
	const userInfo = state.UpdateAccount.userInfo;
	const errors = state.UpdateAccount.errors;
    const result = state.UpdateAccount.result;
    const profileID = state.MyProfile.result[0];
  	const profileInfo = state.MyProfile.myProfile;
  	const profileError = state.MyProfile.errors;
    const profileResult = state.MyProfile.result;

    return {

    	profileInfo,
        userInfo,
        errors,
        result,
        profileID,
        profileResult,
        profileError,
      
    };
};


export default connect(mapStateToProps)(connectAlert(UpdateAccount)); 