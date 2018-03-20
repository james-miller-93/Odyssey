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
import Icon2 from 'react-native-vector-icons/Entypo';

import Modal from "react-native-modal";

import { changeLoginEmailValue, changeLoginPasswordValue,
        pressLoginSubmit, checkInitialLogin,
         cleanLoginErrorLog } from '../actions/Login';

import { submitNewReservation } from '../actions/Reservation';
import { checkActiveReservationTourGuide } from '../actions/ActiveReservation';
import { sendLogOutRequest } from '../actions/LogOut';

const headerImage = require('../assets/images/LoginCover.jpg');
const profilePic = require('../components/Container/profilePic.png');
const tour1 = require('../assets/images/tour1.jpeg');
const tour2 = require('../assets/images/tour2.jpeg');
  

class MyGuideProfile extends Component {
//export default class UserProfile extends Component {
     
    _toggleModal = () => {
      this.setState({ isModalVisible: !this.state.isModalVisible });
    };

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

    notificationsButton() {
      const { navigate } = this.props.navigation;
      return (
          <TouchableOpacity
          underlayColor="#FFF"
          onPress={this.handleNotifications} >
              <Text style={styles.settingText}>Notifications</Text> 
          </TouchableOpacity>
          )
    }

    logoutButton() {
      const { navigate } = this.props.navigation;
      return (
          <TouchableOpacity
          underlayColor="#FFF"
          onPress={this.handleLogout} >
              <Text style={styles.settingText}>Logout</Text> 
          </TouchableOpacity>
          )
    }




constructor(props) {
  super(props)
  this.state = {
      requestVisible: false,
      dateTimeSubmit: '',
      authentication_token: '',
      email: '',
      isModalVisible: false
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
      this.props.navigation.navigate('Requests')
  } else if (nextProps.logoutError && nextProps.logoutError !== this.props.logoutError) {
    this.props.alertWithType('error','Error',nextProps.logoutError);
  } else if(nextProps.logoutResult && nextProps.logoutResult !== this.props.logoutResult) {
    console.log(nextProps.logoutResult);
    this.props.navigation.navigate('Login')
  }
}
  
handleRequestPress = () => {
  this.setState({
    requestVisible: !this.state.requestVisible
  });
};

handleNotifications = () => {
  this.props.dispatch(checkActiveReservationTourGuide(this.props.profileID,
    this.state.authentication_token,this.state.email))
  this.props.navigation.navigate('Requests')
}

handleLogout = () => {
  this.props.dispatch( sendLogOutRequest(this.state.authentication_token,this.state.email) )
  //this.props.navigation.navigate('Requests')
}

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
        
        <TouchableOpacity style={{ height: '100%', width: '100%'}}
        onPress={this._toggleModal} underlayColor="#FFF">
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
            {this.notificationsButton()}
            <View style={styles.border}></View>
            {this.logoutButton()}

        </View>
        </Modal>


          <View style={styles.headerColumn}>
          
            <Image
              style={styles.userImage}
              source={profilePic}
            />
            <Text style={styles.userNameText}> {this.props.profileInfo.firstname} {this.props.profileInfo.lastname}</Text>
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
            <Text style={styles.telNumberText}> {this.props.profileInfo.phone_number} </Text>
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
          <Text style={styles.emailText}>{this.props.profileInfo.email}</Text>
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

    <TouchableOpacity style={{ height: 25, width: 30, right: 10, position: 'absolute'}}
         underlayColor="#FFF">
            <Icon2 name="dots-three-horizontal" style={styles.settingsIcon} size={25} 
            onPress={()=> {this.props.navigation.navigate('ManageTours');}} />
         </TouchableOpacity>


<View style={{padding: 10}}/>

    
        <View style={styles.eachTourContainer}>
          <View style = {styles.tourTextButton}>
            <View style={styles.tourList}>
                <View style={styles.postRow}>
                    <Text>Tour Name</Text>
                    <Text style={styles.date}>{this.props.tourInfo.duration} hours</Text>
                </View>
                <View style={styles.wordRow}>
                    <Text style={styles.wordText}>{this.props.tourInfo.description}</Text>
                </View>
                
            </View>
            
          </View>
        </View>
        
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
    
    const profileInfo = state.MyProfile.myProfile;
    const profileID = state.MyProfile.result[0];

    const traveler = '';
    const tourInfo = '';

    const reservationResult = state.ActiveReservation.result;
    const reservationError = state.ActiveReservation.errors;

    const logoutResult = state.LogOut.result;
    const logoutError = state.LogOut.errors;

    return {
        profileInfo,
        profileID,
        traveler,
        tourInfo,
        reservationResult,
        reservationError,
        logoutResult,
        logoutError
    };
};


export default connect(mapStateToProps)(connectAlert(MyGuideProfile));

//export default connect(mapStateToProps)(connectAlert(SignIn));