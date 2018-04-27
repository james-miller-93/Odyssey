import React, { Component } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, Button, View, ScrollView, Platform, ListView, Linking, Image, Text, KeyboardAvoidingView, ImageBackground, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Card, Icon as Icon1} from 'react-native-elements'
import { Container } from '../components/Container';
import { GeneralTextInput } from '../components/TextInput';
import { ButtonText } from '../components/Button';
import { Errors } from '../components/Errors';
import styles from '../screens/styles';
import { UserProfileContainer } from '../components/Container';
import { connectAlert } from '../components/Alert';
import { TimeDate, OneDateTime } from '../components/TimeDate';
import Icon2 from 'react-native-vector-icons/Feather';

import HideableView from 'react-native-hideable-view';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';

import Modal from "react-native-modal";

import { changeLoginEmailValue, changeLoginPasswordValue,
        pressLoginSubmit, checkInitialLogin,
         cleanLoginErrorLog } from '../actions/Login';
import {LinearGradient} from 'expo';
import { submitNewReservation } from '../actions/Reservation'

const headerImage = require('../assets/images/LoginCover.jpg');
const profilePic = require('../components/Container/profilePic.png');
const tour1 = require('../assets/images/tour1.jpeg');
const tour2 = require('../assets/images/tour2.jpeg');
  

class UserProfile extends Component {

    state = {
    isModalVisible: false

    };

    //updating the state for the dateTme
    dateTimeSetter = (dateTime) => {
    this.setState({ dateTimeSubmit: dateTime })
    }
 
    //updates the state for the menu modal
    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

    //updating the store and navigating to the different pages 
    handleSignUpPress = () => {
        this.props.navigation.navigate('Register');
    };

    profileButton(){
    const { navigate } = this.props.navigation;
    return (
        <TouchableOpacity
        underlayColor="#FFF"
        onPress={()=> {this.setState({ isModalVisible: false }); navigate('MyTouristProfile')}} >
            <Text style={styles.settingText}>My Profile</Text> 
        </TouchableOpacity>
        )
    }
    sendTourRequest = (tourid) => {
  this.props.dispatch(submitNewReservation(this.state.dateTimeSubmit,
    tourid, this.state.authentication_token,this.state.email))
  console.log('submitted the following date and time')
  console.log(this.state.dateTimeSubmit)
}
  
handleRequestPress = () => {
  console.log('=========')
  console.log(this.props.profileInfo.profile_image)
  this.setState({
    requestVisible: !this.state.requestVisible
  });
};

//initializes the state to empty strings
constructor(props) {
  super(props)
  this.state = {
      requestVisible: false,
      dateTimeSubmit: '',
      authentication_token: '',
      email: ''
  };
};

async componentDidMount() {
  let storedToken = await AsyncStorage.getItem('authentication_token')
  let storedEmail = await AsyncStorage.getItem('email')
  this.setState( {
      authentication_token: storedToken,
      email: storedEmail
  })
};

//check if object is an error or a valid result
componentWillReceiveProps(nextProps) {
  if (nextProps.reservationError && nextProps.reservationError !== this.props.reservationError) {
      this.props.alertWithType('error','Error',nextProps.reservationError);
  } else if(nextProps.reservationResult && nextProps.reservationResult !== this.props.reservationResult) {
      console.log(nextProps.reservationResult);
      this.props.alertWithType('success','Success','Your Request Has Been Sent');
  }
}

//renders the header of the page
    renderHeader = () => {

    return (

      <View >

        <LinearGradient colors={[ '#C67171', '#fb9481', '#EE9572', '#FF9955', '#EE7942']} start={[0, 0]}
            end={[1, 1]} style={[ 
            {
              width: 400,
              height: 340,
            },
            styles.headerBackgroundImage]}>

        <View style={{width: 60, height: 50, top: 25, left:10, position: 'absolute'}}>
        
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('HomeAlternate')}} underlayColor="#FFF">
            <Icon2 name="arrow-left" style={{left: 0, position: 'absolute'}} size={27} />
            </TouchableOpacity>
        </View>

          <View style={styles.headerColumn}>
          
            <Image
              style={styles.userImage}
              source={{ uri: 'https:'+this.props.profileInfo.profile_image}}
             
            />
            <Text style={styles.userNameText}> {this.props.profileInfo.firstname} {this.props.profileInfo.lastname}</Text>
            <View style={styles.userAddressRow}>
              <View>
                <Icon1
                  name="place"
                  underlayColor="transparent"
                  iconStyle={styles.placeIcon}
                 
                />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                  {this.props.tourInfo.city}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    )
  }

//renders the tel box info
  renderTel = () => {
    return (
       
            <View style={styles.innerTelContainer}>
            <View style={styles.iconRow}>
      
            <Icon1
              name="call"
              underlayColor="transparent"
              iconStyle={styles.telIcon}
       
            />
       
        </View>
        <View style={styles.telRow}>
          <View style={styles.telNumberColumn}>
            <Text style={styles.telNumberText}> {this.props.profileInfo.phone_number} </Text>
        </View>
        </View>

        </View>
        )
    }


//renders the email box info
  renderEmail = () => (

      <View style={styles.innerEmailContainer}>
      <View style={styles.iconRow2}>
        
          <Icon1
            name="email"
            underlayColor="transparent"
            iconStyle={styles.emailIcon}
         
          />
     
      </View>
      <View style={styles.emailRow}>
        <View style={styles.emailColumn}>
          <Text style={styles.emailText}>{this.props.profileInfo.email}</Text>
        </View>
        </View>
        </View>
  )

//renders a border between different views
renderSeparator = () => (
  <View style={styles.container}>
    <View style={styles.separatorOffset} />
    <View style={styles.separator} />
  </View>
)

//renders the tours of that tour guide on the page
renderTours = (tourName,tourDuration,tourDescription,tourid) => ( 

    <View style={styles.sceneContainer}>
    
        <View style={styles.eachTourContainer}>
          <View style = {styles.tourTextButton}>
            <View style={styles.tourList}>
                <View style={styles.postRow}>
                    <Text>{tourName}</Text>
                    <Text style={styles.date}>{tourDuration} hours</Text>
                </View>
                <View style={styles.wordRow}>
                    <Text style={styles.wordText}>{tourDescription}</Text>
                </View>
                
            </View>
            
          </View>
        </View>
        <View
        style={{
          backgroundColor: '#000',
          width: '100%',
          height: 45,
          alignItems: 'center'
        }}
        >
        <TouchableOpacity
                
                onPress={this.handleRequestPress}

                >

                <View >
                    <Text style={{fontSize: 18, color: '#FFF', top:8}}> Request Tour </Text>
                </View>
                
                </TouchableOpacity>
              
        </View>
        <HideableView
        visible = {this.state.requestVisible}
        removeWhenHidden={true}
        style={{
          height: 130,
          width: '100%',
          //justifyContent: 'center',
          alignItems: 'center'
        }}
        >
        <OneDateTime
        handleConfirmDateTime={this.dateTimeSetter}
        handleSubmitRequest={() => {this.sendTourRequest(tourid)}}
        />
        </HideableView>
        <View style={styles.toursContainer}>
            <Image style={styles.postImage} source={tour1} />
        </View>
    </View>

)

// renders the different parts of the page
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.profileContainer}>
          <Card containerStyle={styles.cardContainer}>
            {this.renderHeader()}
            {this.renderTel()}
            {this.renderSeparator()}
            {this.renderEmail()}
            {this.renderSeparator()}
            {this.props.tourArray.map((data) => {
              return (
                <View key={data.id}>
                  {this.renderTours(data.title,data.duration,data.description,data.id)}
                </View>
              )
            })}
            
            
          </Card>
        </View>
      </ScrollView>
    )
  }
}
        

//maps the states in the reducers to the props in this page
const mapStateToProps = (state) => {
    
    const traveler = state.ViewProfile.result.traveler;
    const tourInfo = state.ViewProfile.tourInfo;

    const tourArray = state.ViewProfile.activeResult.tours;
    const profileInfo = state.ViewProfile.profileInfo;

    const reservationResult = state.Reservation.result;
    const reservationError = state.Reservation.errors

    return {
        traveler,
        tourInfo,
        tourArray,
        profileInfo,
        reservationResult,
        reservationError
    };
};


export default connect(mapStateToProps)(connectAlert(UserProfile));

//export default connect(mapStateToProps)(connectAlert(SignIn));