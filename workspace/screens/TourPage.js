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
import Icon7 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/MaterialIcons';
import Icon6 from 'react-native-vector-icons/Feather';

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
import {editTours, tourMode} from '../actions/CreateTours';
const headerImage = require('../assets/images/LoginCover.jpg');
const profilePic = require('../components/Container/profilePic.png');
const tour1 = require('../assets/images/tour1.jpeg');
const tour2 = require('../assets/images/tour2.jpeg');
const image = require('../assets/images/blankimage.jpeg');
  
//the profile page for tourists
class TourPage extends Component {
     
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

    this.props.dispatch(tourMode('edit'))

   
    //this.props.dispatch(tourMode('edit'))

    console.log("here");

    const tourInfo = {

      city: data.city,
      title: data.title,
      duration: data.duration,
      description: data.description,
      tourID: data.id,
      max_persons: data.max_persons,
      is_daytrip: data.is_daytrip,
      is_foodie: data.is_foodie,
      is_landmarks: data.is_landmarks,
      is_museums: data.is_museums,
      is_nightlife: data.is_nightlife,
      is_outdoors: data.is_outdoors, 
      price: data.price,
    }   

    this.props.dispatch(editTours(tourInfo));
    this.props.navigation.navigate('CreateTours');

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



        <ImageBackground
          style={[ 
            {
              width: 400,
              height: 280,
            },
            styles.headerBackgroundImage]}
          blurRadius={3}
          source={tour1}
        >
        

        
         
        <View style={styles.settingsBox}>
        
        <TouchableOpacity style={{ height: '100%', width: '100%'}}
        onPress={() => {this.props.navigation.navigate('MyGuideProfile')}} underlayColor="#FFF">
            <Icon6 name="arrow-left" style={styles.settingsIcon} size={33} />
         </TouchableOpacity>
        </View>

        
        

        

          



          
         
        </ImageBackground>
      </View>
    )
  }

    


//renders the email box info
  renderTourTitle = () => (

      <View style={styles.innerEmailContainer}>
    
      <View style={styles.emailRow}>
        <View style={{left:12}}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{this.props.currentTour.title}</Text>
        </View>
        </View>
        </View>
  )


  //renders the email box info
  renderTourLocation = () => (

      <View style={styles.innerEmailContainer}>
    
      <View style={styles.emailRow}>
        <View style={{left:12}}>
          <Text style={{fontSize: 18}}>{this.props.currentTour.city}</Text>
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

 <View style={{width: 400, height: 200, 
              backgroundColor: '#e4e4e4'}}>
  <View style={styles.aboutContainer}>
  <View style={styles.aboutBox}>
   
    <Text style={styles.titleText}>
      {this.props.currentTour.description} 
    </Text>
    

    </View>
    </View>
</View>

  )
  


  renderTickers = () => (

  <View style={{width: 400, height: 75, 
              backgroundColor: '#e4e4e4'}}>

        <View style={{flexDirection: 'row', top: 20, position: 'absolute', left: 15, width: 350, height: 70}}>

                <View style={{flexDirection: 'column', height: 70, width: 65 }} >

                  <View style={{left: 15, bottom:3}}>
                      <Icon6
                            name="sun"
                            underlayColor="transparent"
                            iconStyle={styles.telIcon}
                            size={25}
                    
                          />   
                  </View>
                  
                    <Text> Daytrip </Text>
                  
                </View>
                <View style={{flexDirection: 'column', height: 70, width: 65 }} >

                  <View style={{left: 15, bottom:3}}>
                      <Icon3
                            name="beamed-note"
                            underlayColor="transparent"
                            iconStyle={styles.telIcon}
                            size={22}
                    
                          />   
                  </View>
                  
                    <Text> Nightlife </Text>
                  
                </View>

                <View style={{flexDirection: 'column', height: 70, width: 65 }} >

                  <View style={{left: 18, bottom:3}}>
                      <Icon
                            name="ios-football"
                            underlayColor="transparent"
                            iconStyle={styles.telIcon}
                            size={22}
                    
                          />   
                  </View>
                  
                    <Text style={{left:2}}> Outdoors </Text>
                  
                </View>

                <View style={{flexDirection: 'column', height: 70, width: 65, top:2, left: 5}} >

                  <View style={{left: 15, bottom:3}}>
                      <Icon7
                            name="institution"
                            underlayColor="transparent"
                            iconStyle={styles.telIcon}
                            size={21}
                    
                          />   
                  </View>
                  
                    <Text> Museum </Text>
                  
                </View>

                 <View style={{flexDirection: 'column', height: 70, width: 65, top: -1}} >

                  <View style={{left: 15}}>
                      <Icon4
                            name="food-fork-drink"
                            underlayColor="transparent"
                            iconStyle={styles.telIcon}
                            size={23}
                    
                          />   
                  </View>
                  
                    <Text style={{left:7}}> Food </Text>


                  
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
  isTourCarousel = {false}
  title = {"TOUR GALLERY"}
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
  isTourCarousel = {true} 
  title = {"TOURS"}
  data = {entries}/>

  )
}
renderQuestions = () => (


       <View style={{width: 400, height: 300, 
              backgroundColor: '#FFB07590'}}>
  <View style={[styles.questionsContainer, {height: 220}]}>
  <View style={styles.aboutBox}>
   
    <Text style={styles.titleText}>
      More Information
    </Text>
   
         <View style={{flexDirection:'row', top: 15}}>
          <Text style={{fontWeight: 'bold', marginRight: 10, marginBottom: 15, fontSize: 14}}>
            Languages
          </Text>
          <Text>
          {this.props.currentTour.language} 
          </Text>
        </View>
        <View style={{flexDirection:'row', top: 15}}>
          <Text style={{fontWeight: 'bold', marginRight: 10, marginBottom: 15, fontSize: 14}}>
            Number of People
          </Text>
          <Text>
          {this.props.currentTour.max_persons} 
          </Text>
        </View>
        <View style={{flexDirection:'row', top: 15}}>
          <Text style={{fontWeight: 'bold', marginRight: 10, marginBottom: 15, fontSize: 14}}>
            Tour Duration
          </Text>
          <Text>
          {this.props.currentTour.duration} 
          </Text>
        </View>
        <View style={{flexDirection:'row', top: 15}}>
          <Text style={{fontWeight: 'bold', marginRight: 10, marginBottom: 15, fontSize: 14}}>
            Price
          </Text>
          <Text>
          ${this.props.currentTour.price} 
          </Text>
        </View>


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
            {this.renderTourTitle()}
            {this.renderSeparator()} 
            {this.renderTourLocation()}
            {this.renderSeparator()} 
            {this.renderTickers()}
            {this.renderAbout()}
            {this.renderCarousel()}
            {this.renderQuestions()}

                  
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
    const currentTour = state.TourPage.currentTour;


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
        logoutResult,
        currentTour,
    };
};


export default connect(mapStateToProps)(connectAlert(TourPage));

//export default connect(mapStateToProps)(connectAlert(SignIn));