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
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";
import { changeLoginEmailValue, changeLoginPasswordValue,
        pressLoginSubmit, checkInitialLogin,
         cleanLoginErrorLog } from '../actions/Login';
import { sendLogOutRequest } from '../actions/LogOut';
import { submitNewReservation } from '../actions/Reservation';
import { checkActiveReservationTourGuide, checkActiveReservationTourist } from '../actions/ActiveReservation';
//import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo';
//import ColorBlending from 'gl-react-color-blending';
//import Carousel from 'react-native-snap-carousel';
import { CarouselContainer } from '../components/Carousel'
import {updateAccount} from '../actions/UpdateAccount'

const headerImage = require('../assets/images/LoginCover.jpg');
const profilePic = require('../components/Container/profilePic.png');
const tour1 = require('../assets/images/tour1.jpeg');
const tour2 = require('../assets/images/tour2.jpeg');
const image = require('../assets/images/blankimage.jpeg');
  
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
      isModalVisible: false,
      color: 0,

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
    else if(nextProps.userInfo && nextProps.userInfo !== this.props.userInfo) {
                this.props.navigation.navigate('UpdateAccount');
              //if success
            } 
  }



//renders the header of the page
    renderHeader = () => {


    return (

      <View>



        {/*<ImageBackground
          style={[ 
            {
              width: 400,
              height: 280,
            },
            styles.headerBackgroundImage]}
          blurRadius={10}
          source={headerImage}
        >#C67171
        */}

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

        </LinearGradient>
         
        {/*</ImageBackground>*/}
      </View>
    )
  }

//renders the tel box info
  renderTel = () => (
       
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
  

renderCarousel = () => {
 const data = [
    {
        title: 'Beautiful and dramatic Tour',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'An early walk in NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },

    ];
return (

<View>


  <CarouselContainer
  navigation = {this.props.navigation}
  isTourCarousel = {false}
  title = {"PICTURES"}
  data = {data}
   />


  </View>
  )
}

renderTourCarousel = () => {
  const data = 
    [
    {
        title: 'Beautiful and dramatic Tour',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'An early walk in NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },

    ];
    var entries = [];
    var index = 0;
    entries = data.map((y) => (
      { title: y.title , subtitle : y.subtitle, illustration : y.illustration }
    ));
    
    

    console.log("entries:", entries, entries.length);
  


  return (
  <CarouselContainer
  navigation = {this.props.navigation}
  isTourCarousel = {true} 
  title = {"TOURS"}
  data = {entries}/>

  )
}
renderQuestions = () => (


       <View style={{width: 400, height: 400, 
              backgroundColor: '#EE9572'}}>
  <View style={styles.questionsContainer}>
  <View style={styles.aboutBox}>
   
    <Text style={styles.titleText}>
      What do you love to drink most?
    </Text>
   
    <Text style={styles.infoText}>
      Beer
    </Text>

    </View>
    </View>
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
            {this.renderAbout()}
            {this.renderCarousel()}
         
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
    const authentication_token = state.UpdateAccount.authentication_token;
    const email = state.UpdateAccount.email;
    const userInfo = state.UpdateAccount.userInfo;


    return {
        profileInfo,
        profileID,
        traveler,
        tourInfo,
        userInfo,
        authentication_token,
        email,
        reservationResult,
        reservationError,
        logoutError,
        logoutResult
    };
};


export default connect(mapStateToProps)(connectAlert(MyTouristProfile));

//export default connect(mapStateToProps)(connectAlert(SignIn));