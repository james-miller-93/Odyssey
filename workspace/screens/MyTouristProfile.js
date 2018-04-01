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
import { sendLogOutRequest } from '../actions/LogOut';
import { submitNewReservation } from '../actions/Reservation';
import { checkActiveReservationTourGuide, checkActiveReservationTourist } from '../actions/ActiveReservation';

const headerImage = require('../assets/images/LoginCover.jpg');
const profilePic = require('../components/Container/profilePic.png');
const tour1 = require('../assets/images/tour1.jpeg');
const tour2 = require('../assets/images/tour2.jpeg');
  
//the profile page for tourists
class MyTouristProfile extends Component {
     
    //controls the modal visibility 
    _toggleModal = () => {
      this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    //navigates to sign up page
    handleSignUpPress = () => {
        this.props.navigation.navigate('Register');
    };

    //updates the logout status 
    handleLogout = () => {
      
      this.props.dispatch( sendLogOutRequest(this.state.authentication_token,this.state.email) )
   
    }
    handleRequestPress = () => {
      
      this.setState({
      requestVisible: !this.state.requestVisible
      });
    };

    handleNotifications = () => {

        this.props.dispatch(checkActiveReservationTourist(this.props.profileID,
        this.state.authentication_token,this.state.email))
    
      }


    //shows the different buttons in the menu modal
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

    notificationsButton(){
      const { navigate } = this.props.navigation;
      return (
          <TouchableOpacity
          underlayColor="#FFF"
          onPress={this.handleNotifications} >
              <Text style={styles.settingText}>Notifications</Text> 
          </TouchableOpacity>
          )
      }

    homePage(){
    const { navigate } = this.props.navigation;
    return (
        <TouchableOpacity
        underlayColor="#FFF"
        onPress={()=> {this.setState({ isModalVisible: false }); navigate('HomeAlternate')}} >
        <Text style={styles.settingText}>Home</Text> 
        </TouchableOpacity>
        )
    }

    profileButton(){

    return (
        <TouchableOpacity
        underlayColor="#FFF"
        
        >
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

//initializes the states 
constructor(props) {
  super(props)
  this.state = {
      requestVisible: false,
      dateTimeSubmit: '',
      authentication_token: '',
      email: '',
      isModalVisible: false

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

//checks if object received from backend is an error or a valid result
componentWillReceiveProps(nextProps) {
  if (nextProps.reservationError && nextProps.reservationError !== this.props.reservationError) {
      this.props.alertWithType('error','Error',nextProps.reservationError);
  } else if(nextProps.reservationResult && nextProps.reservationResult !== this.props.reservationResult) {
      console.log(nextProps.reservationResult);
      this.props.navigation.navigate('Notifications')
  } else if (nextProps.logoutError && nextProps.logoutError !== this.props.logoutError) {
    this.props.alertWithType('error','Error',nextProps.logoutError);
  } else if(nextProps.logoutResult && nextProps.logoutResult !== this.props.logoutResult) {
    console.log(nextProps.logoutResult);
    this.props.navigation.navigate('Login')
  }
}


//renders the header of the page
    renderHeader = () => {

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
        animationIn={'slideInLeft'}
        animationOut={'slideOutRight'}
        >
          <View style={styles.newSettingWindow}>
             

             {this.homePage()}  
             <View style={styles.border}></View>     
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
  
                />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                  {this.props.profileInfo.city}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
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

//renders a separator 
renderSeparator = () => (
  <View style={styles.container}>
    <View style={styles.separatorOffset} />
    <View style={styles.separator} />
  </View>
)

//renders the different components of the page
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
            
          </Card>
        </View>
      </ScrollView>
    )
  }
}
        

//maps states in reducers to props in the screen
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
        logoutError,
        logoutResult
    };
};


export default connect(mapStateToProps)(connectAlert(MyTouristProfile));

//export default connect(mapStateToProps)(connectAlert(SignIn));