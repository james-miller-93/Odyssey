import React, { Component } from 'react';
import { Alert, Switch, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Button, View, ScrollView, Platform, ListView, Linking, Image, Text, KeyboardAvoidingView, ImageBackground, AsyncStorage } from 'react-native';
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
//import { Switch } from 'react-native-switch';
import HideableView from 'react-native-hideable-view';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/MaterialIcons';
import MapView, { Marker, Callout } from 'react-native-maps';
import {CarouselContainer} from '../components/Carousel';
import Modal from "react-native-modal";
import {LinearGradient} from 'expo';
import { changeLoginEmailValue, changeLoginPasswordValue,
        pressLoginSubmit, checkInitialLogin,
         cleanLoginErrorLog } from '../actions/Login';
import {updateAccount} from '../actions/UpdateAccount';
import { submitNewReservation } from '../actions/Reservation';
import { checkActiveReservationTourGuide } from '../actions/ActiveReservation';
import { sendLogOutRequest } from '../actions/LogOut';
import {isActiveUpdate} from '../actions/IsActive';
import {getCurrentTour} from '../actions/TourPage';

const headerImage = require('../assets/images/LoginCover.jpg');
const profilePic = require('../components/Container/profilePic.png');
const tour1 = require('../assets/images/tour1.jpeg');
const tour2 = require('../assets/images/tour2.jpeg');

const INITIAL_REGION_HELP = {
  latitude: 39.8283,
  longitude: -98.5795,
  latitudeDelta: 60,
  longitudeDelta: 25
}
  

class MyGuideProfile extends Component {

   
   //updates the state for the menu modal  
    _toggleModal = () => {
      this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    handleSignUpPress = () => {
        this.props.navigation.navigate('Register');
    };

    //updates the menu window when press
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
              <Text style={styles.settingText}>Requests</Text> 
          </TouchableOpacity>
          )
    }

    renderOldInfo = (data) => {

    //this.props.dispatch(tourMode('edit'))

    console.log("here");

    const userInfo = {

      city: data.city,
      description: data.description,
      phone_number: data.phone_number,
    }   

    this.props.dispatch(updateAccount(userInfo))

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

//initializing states 
constructor(props) {
  super(props)
  this.state = {
      requestVisible: false,
      dateTimeSubmit: '',
      authentication_token: '',
      email: '',
      isModalVisible: false,
      isMapModalVisible: false,
      activeLatitude: '',
      activeLongitude: '',
      location: INITIAL_REGION_HELP
  };
};

//shows an alert if switch value is true
ShowAlert = (value) =>{
  this.setState({

    SwitchOnValueHolder: value

  })
  
  if(value === true)
  { }
  else{
 
    //Perform any task here which you want to execute on Switch OFF event.
    Alert.alert("You are no longer active.");

  }
  console.log('================action sent=================')
  console.log(this.state.location)
  this.props.dispatch(isActiveUpdate(this.state.authentication_token,this.state.email,value,this.state.location,this.props.profileID))
    console.log('================action sent=================')
    console.log(this.state.location)
}

//shows the modal map if switch is on
_toggleMapModal = () => {
  this.setState({ isMapModalVisible: !this.state.isMapModalVisible });
};

_hideMapModal = () => { this.setState({ isMapModalVisible: false }) };

//shows the map modal or an alert depending on the switch value
handleSwitch = (value) => {
  this.setState({
 
    SwitchOnValueHolder: value

  })

  if (value === true) {
    this._toggleMapModal();
  }
  else if (value === false) {
    this.ShowAlert(value);
  }
}

//waits on info from backend
async componentDidMount() {
  let storedToken = await AsyncStorage.getItem('authentication_token')
  let storedEmail = await AsyncStorage.getItem('email')
  this.setState( {
      authentication_token: storedToken,
      email: storedEmail
  })
  if (this.props.profileInfo.latitude !== undefined && this.props.profileInfo.longitude !== undefined) {
    this.setState({
      location: {
        latitude: this.props.profileInfo.latitude,
        longitude: this.props.profileInfo.longitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      }
    })
  }
};

//checks if object received from backend is an error or valid result
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
  else if (nextProps.activeError && nextProps.activeError !== this.props.activeError) {
    this.props.alertWithType('error','Error',nextProps.activeError);
  } else if(nextProps.activeResult && nextProps.activeResult !== this.props.activeResult) {
    console.log(nextProps.activeResult);
    
  }
  else if(nextProps.userInfo && nextProps.userInfo !== this.props.userInfo) {
                this.props.navigation.navigate('UpdateAccount');
              //if success
  } 
}
  
handleRequestPress = () => {
  this.setState({
    requestVisible: !this.state.requestVisible
  });
};

//updates the notification info from store 
handleNotifications = () => {
  this.props.dispatch(checkActiveReservationTourGuide(this.props.profileID,
    this.state.authentication_token,this.state.email))
}

//updates logout status
handleLogout = () => {
  this.props.dispatch( sendLogOutRequest(this.state.authentication_token,this.state.email) )
}

//renders the header
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

    
        <View style={styles.settingsBox}>
        
        <TouchableOpacity style={{ height: '100%', width: '100%'}}
        onPress={this._toggleModal} underlayColor="#FFF">
            <Icon name="ios-menu" style={styles.settingsIcon} size={45} />
         </TouchableOpacity>
        </View>
      


        <View style={styles.profileEditBox}>
        <TouchableOpacity style={{ height: '100%', width: '100%'}}
        underlayColor="#FFF" 
        onPress={()=> {this.renderOldInfo(this.props.profileInfo)}}>
            <Icon4 name="dots-vertical" style={styles.proEditIcon} size={32} />
         </TouchableOpacity>
        </View>
      
        <Modal isVisible={this.state.isModalVisible}

        backdropOpacity={0.4}
        onBackdropPress={() => this.setState({ isModalVisible: false }) }
        supportedOrientations={['portrait', 'landscape']}
        animationIn={'slideInLeft'}
        animationOut={'slideOutRight'}

        >


          <View style={styles.settingWindow}>
                    
            {this.profileButton()}
            <View style={styles.border}></View>
            {this.notificationsButton()}
            <View style={styles.border}></View>
            {this.logoutButton()}

        </View>
        </Modal>
        

        <Modal isVisible={this.state.isMapModalVisible}
        backdropOpacity={0.4}
        onBackdropPress={() => this.setState({ isMapModalVisible: false, SwitchOnValueHolder: false}) }
        supportedOrientations={['portrait', 'landscape']}
        >
          <View style={styles.mapWindow}>
            <Text> Where are you at?</Text>
            <Text>Move the marker to your location</Text>
            <MapView
              style={{
                height: '80%',
                width: '80%'
              }}
              initialRegion={this.state.location}
              onRegionChangeComplete={(loc) => this.setState({ location: loc})}
            >
              <MapView.Marker
              coordinate={this.state.location}
              
              />
            </MapView>

            <TouchableOpacity
            onPress={() => {
              this.setState({ isMapModalVisible: false });
              this.props.dispatch(isActiveUpdate(this.state.authentication_token,this.state.email,true,this.state.location,this.props.profileID))
              this.props.alertWithType('success','Success','You are now active.');
              
            }}
            >
              <Text> Submit Location</Text>
            </TouchableOpacity>
                    

        </View>
        </Modal>


          <View style={styles.headerColumn}>
          
            <Image
              style={styles.userImage}
              source={{uri: "https:" + this.props.profileInfo.image}}
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
        </LinearGradient>
      </View>
    )
  }


//renders the tell info box
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

//renders the email info box
  renderEmail = () => (

    <View>
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
        
  </View>
  )

  //renders the switch 
  renderSwitch = () => (

    <View style={{ height: 70, width: '100%'}}>
    <View style={{flexDirection: 'row', top : 20, height: 20, width: '100%'}}>
    <Text style={{marginLeft: 20, fontSize: 17, top: 5}}> Go Online </Text> 

    
    <Switch
    onValueChange={(value) => this.handleSwitch(value)}
    value={this.state.SwitchOnValueHolder}
    style={{height: 30, width: 52, right: 7, position: 'absolute' }}
    />

    </View>
    
    </View>

  )

  renderTourCarousel = (data) => {
 
  console.log(data.length);
  if(data.length > 0) {

    var entries = [];
    var index = 0;
    entries = data.map((y) => (
      { title: y.title , subtitle : y.description, illustration : y.image, info: y}
    ));
    
    

    console.log("entries:", entries, entries.length);
  


      return (
      <CarouselContainer
      location = {"In "+this.props.profileInfo.city}
      isTourCarousel = {true} 
      title = {"TOURS"}
      data = {entries}
      />

        )
      }
}

//renders a border/separator between views
renderSeparator = () => (
  <View style={styles.container}>
    <View style={styles.separatorOffset} />
    <View style={styles.separator} />
  </View>
)

//renders the tours on the page
renderTours = (tourName,tourDuration,tourDescription,tourKey) => ( 

    <View style={{top:20}}>

    
        <View style={styles.eachTourContainer}>
          <View style = {styles.tourTextButton}>
            <View style={styles.tourList}>
                <View style={styles.postRow}>
                    <Text>{tourName} </Text>
                    <Text style={styles.date}>{tourDuration} hours</Text>
                </View>
                <View style={styles.wordRow}>
                    <Text style={styles.wordText}>{tourDescription}</Text>
                </View>
                
            </View>
            
          </View>
        </View>
        
        <View style={styles.toursContainer}>
            <Image style={styles.postImage} source={{uri: "https:" + this.props.profileInfo.image}} />
        </View>
    </View>

)
renderAbout = () => (

 <View style={{width: 400, height: 250, 
              backgroundColor: '#e4e4e4'}}>
  <View style={styles.aboutContainer}>
  <View style={styles.aboutBox}>
   
    <Text style={styles.titleText}>
      ABOUT
    </Text>
    <View style={{flexDirection : 'row'}}>
    <View style={styles.languageIcon}>
     <Icon3
            name="language"
            underlayColor="transparent"
            size= {18}
  
    />
    </View>
    <Text style={styles.infoText}>
      Japanese, Chinese, English
    </Text>
    </View>
      <View style={{flexDirection : 'row'}}>
        <View style={styles.languageIcon}>
         <Icon3
                name="suitcase"
                underlayColor="transparent"
                size= {18}
      
        />
        </View>
        <Text style={styles.infoText}>
          Student
        </Text>
        </View>
        <View style={{flexDirection : 'row'}}>
      <View style={styles.languageIcon}>
     <Icon4
            name="gender-transgender"
            underlayColor="transparent"
            size= {18}
  
    />
    </View>
    <Text style={styles.infoText}>
      Female
    </Text>
    </View>

    <View style={{flexDirection : 'row'}}>
    <View style={styles.languageIcon}>
     <Icon5
            name="description"
            underlayColor="transparent"
            size= {18}
  
    />
    </View>
    <Text style={styles.infoText}>
      {this.props.profileInfo.description}
    </Text>
    </View>

    </View>
    </View>
</View>

  )

//renders the entire profile page
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
            {this.renderSwitch()}
            {this.renderAbout()}
            {this.renderTourCarousel(this.props.tours)}
           
            
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

    const tours = state.ViewTours.result.tours;

    const active = state.IsActive.active;
    const activeError = state.IsActive.errors;
    const activeResult = state.IsActive.result;
    const userInfo = state.UpdateAccount.userInfo;

    return {
        profileInfo,
        userInfo,
        profileID,
        traveler,
        tourInfo,
        reservationResult,
        reservationError,
        logoutResult,
        logoutError,
        tours,
        active,
        activeError,
        activeResult,
    };
};


export default connect(mapStateToProps)(connectAlert(MyGuideProfile));

//export default connect(mapStateToProps)(connectAlert(SignIn));