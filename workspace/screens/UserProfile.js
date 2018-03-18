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


import HideableView from 'react-native-hideable-view';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';

import Modal from "react-native-modal";

import { changeLoginEmailValue, changeLoginPasswordValue,
        pressLoginSubmit, checkInitialLogin,
         cleanLoginErrorLog } from '../actions/Login';

import { submitNewReservation } from '../actions/Reservation'

const headerImage = require('../assets/images/LoginCover.jpg');
const profilePic = require('../components/Container/profilePic.png');
const tour1 = require('../assets/images/tour1.jpeg');
const tour2 = require('../assets/images/tour2.jpeg');
  

class UserProfile extends Component {
//export default class UserProfile extends Component {
    state = {
    isModalVisible: false

    };
 
    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

    _hideModal = () => { this.setState({ isModalVisible: false }) };

    handleSignUpPress = () => {
        this.props.navigation.navigate('Register');
    };

    profileButton(){
    const { navigate } = this.props.navigation;
    return (
        <TouchableOpacity
        underlayColor="#FFF"
        onPress={()=> {this.setState({ isModalVisible: false }); navigate('UserProfile')}} >
            <Text style={styles.settingText}>My Profile</Text> 
        </TouchableOpacity>
        )
    }


constructor(props) {
  super(props)
  this.state = {
      requestVisible: false,
      dateTimeSubmit: '',
      authentication_token: '',
      email: ''
      //dateSubmit: '',
      //timeSubmit: '',
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

componentWillReceiveProps(nextProps) {
  if (nextProps.reservationError && nextProps.reservationError !== this.props.reservationError) {
      this.props.alertWithType('error','Error',nextProps.reservationError);
  } else if(nextProps.reservationResult && nextProps.reservationResult !== this.props.reservationResult) {
      console.log(nextProps.reservationResult);
  }
}

/*timeSetter = (time) => {
  this.setState({ timeSubmit: time })
}

dateSetter = (date) => {
  this.setState({ dateSubmit: date })
}*/

dateTimeSetter = (dateTime) => {
  this.setState({ dateTimeSubmit: dateTime })
}

sendTourRequest = () => {
  this.props.dispatch(submitNewReservation(this.state.dateTimeSubmit,
    this.props.tourInfo.tourID, this.state.authentication_token,this.state.email))
  console.log('submitted the following date and time')
  console.log(this.state.dateTimeSubmit)
}
  
handleRequestPress = () => {
  this.setState({
    requestVisible: !this.state.requestVisible
  });
};

    renderHeader = () => {

   /* const {
      avatar,
      avatarBackground,
      name,
      address: { city, country },
    } = this.props*/
 
    return (

      <View >

        <ImageBackground
          style={[ 
            {
              width: 400,
              height: 280,
            },
            styles.headerBackgroundImage]}
          blurRadius={10}
          source={headerImage}
        >


      
         
        <View style={styles.settingsBox}>
        
        <TouchableOpacity onPress={this._toggleModal} underlayColor="#FFF">
            <Icon name="ios-menu" style={styles.settingsIcon} size={45} />
         </TouchableOpacity>
        </View>

        <Modal isVisible={this.state.isModalVisible}
        backdropOpacity={0.4}
        onBackdropPress={() => this.setState({ isModalVisible: false }) }
        supportedOrientations={['portrait', 'landscape']}
        >
          <View style={styles.settingWindow}>
                    
            {this.profileButton()}
            <View style={styles.border}></View>
            <Text style={styles.settingText}>Notifications</Text> 
            <View style={styles.border}></View>
            <Text style={styles.settingText}>Logout</Text> 

        </View>
        </Modal>


          <View style={styles.headerColumn}>
          
            <Image
              style={styles.userImage}
              //source={profilePic}
              source={{ uri: this.props.traveler.image}}
            />
            <Text style={styles.userNameText}> {this.props.traveler.firstname} {this.props.traveler.lastname}</Text>
            <View style={styles.userAddressRow}>
              <View>
                <Icon1
                  name="place"
                  underlayColor="transparent"
                  iconStyle={styles.placeIcon}
                  //onPress={this.onPressPlace}
                />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                  {this.props.tourInfo.city}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }

  renderTel = () => {
    return (
       
            <View style={styles.innerTelContainer}>
            <View style={styles.iconRow}>
      
            <Icon1
              name="call"
              underlayColor="transparent"
              iconStyle={styles.telIcon}
              //onPress={() => onPressTel(number)}
            />
       
        </View>
        <View style={styles.telRow}>
          <View style={styles.telNumberColumn}>
            <Text style={styles.telNumberText}> {this.props.traveler.phone_number} </Text>
        </View>
        </View>

        </View>
        )
    }



  renderEmail = () => (

      <View style={styles.innerEmailContainer}>
      <View style={styles.iconRow2}>
        
          <Icon1
            name="email"
            underlayColor="transparent"
            iconStyle={styles.emailIcon}
            //onPress={() => onPressEmail()}
          />
     
      </View>
      <View style={styles.emailRow}>
        <View style={styles.emailColumn}>
          <Text style={styles.emailText}>{this.props.traveler.email}</Text>
        </View>
        </View>
        </View>
  )

renderSeparator = () => (
  <View style={styles.container}>
    <View style={styles.separatorOffset} />
    <View style={styles.separator} />
  </View>
)

renderTours = () => ( 

    <View style={styles.sceneContainer}>
    
        <View style={styles.eachTourContainer}>
          <View style = {styles.tourTextButton}>
            <View style={styles.tourList}>
                <View style={styles.postRow}>
                    <Text>{this.props.tourInfo.name}</Text>
                    <Text style={styles.date}>{this.props.tourInfo.duration} hours</Text>
                </View>
                <View style={styles.wordRow}>
                    <Text style={styles.wordText}>{this.props.tourInfo.description}</Text>
                </View>
                
            </View>
            
          </View>
        </View>
        <View
        style={{
          backgroundColor: '#F9A602',
          width: '100%'
        }}
        >
              <ButtonText
              displayText = {"Request Tour"}
              bgColor = {{ backgroundColor: '#F9A602'}}
              handlePress={this.handleRequestPress}
              />
        </View>
        <HideableView
        visible = {this.state.requestVisible}
        removeWhenHidden={true}
        style={{
          height: 200,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
        <OneDateTime
        handleConfirmDateTime={this.dateTimeSetter}
        handleSubmitRequest={this.sendTourRequest}
        />
        </HideableView>
        <View style={styles.toursContainer}>
            <Image style={styles.postImage} source={tour1} />
        </View>
    </View>

)




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
            {this.renderTours()}
            
          </Card>
        </View>
      </ScrollView>
    )
  }
}
        



const mapStateToProps = (state) => {
    
    const traveler = state.ViewProfile.result.traveler;
    const tourInfo = state.ViewProfile.tourInfo;

    const reservationResult = state.Reservation.result;
    const reservationError = state.Reservation.errors

    return {
        traveler,
        tourInfo,
        reservationResult,
        reservationError
    };
};


export default connect(mapStateToProps)(connectAlert(UserProfile));

//export default connect(mapStateToProps)(connectAlert(SignIn));