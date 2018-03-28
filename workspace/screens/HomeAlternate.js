import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage, TextInput } from 'react-native';
import MapView, { Marker, Callout} from 'react-native-maps';
import { connect } from 'react-redux';
import Modal from "react-native-modal";
import { ButtonText } from '../components/Button';
import { Top } from '../components/Container';
import { CalloutContent } from '../components/MapComponents/';
import { connectAlert } from '../components/Alert';
import Icon from 'react-native-vector-icons/Ionicons';

import { checkActiveReservationTourist } from '../actions/ActiveReservation'
import { sendLogOutRequest } from '../actions/LogOut';

import { changeTourLocationValue } from '../actions/TourList';
import { pressProfileView, pressActiveProfileView } from '../actions/ViewProfile';

import styles from '../components/Map/styles'
import screenStyles from '../screens/styles';

//TEMP DATA
const TEMP_INITIAL_REGION = {
    latitude: 41.3119,
    longitude: -72.92834,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
};

const TEMP_MARKER_NAME = "Michal Dimick";
const TEMP_MARKER_RATING = "5.0";
const TEMP_MARKER_DISTANCE = "0.7 miles";
const TEMP_MARKER_LOCATION1 = {
    latitude: 41.3129,
    longitude: -72.92834,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
};
const TEMP_MARKER_LOCATION2 = {
    latitude: 41.3109,
    longitude: -72.92834,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
};
const TEMP_MARKER_LOCATION3 = {
    latitude: 41.3089,
    longitude: -72.92834,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
};
const TEMP_MARKER_DATA1 = {
    name: TEMP_MARKER_NAME,
    rating: TEMP_MARKER_RATING,
    distance: TEMP_MARKER_DISTANCE,
    location: TEMP_MARKER_LOCATION1,
    ID: "marker1",
    image: require('../assets/images/profile2.png')
};
const TEMP_MARKER_DATA2 = {
    name: TEMP_MARKER_NAME,
    rating: TEMP_MARKER_RATING,
    distance: TEMP_MARKER_DISTANCE,
    location: TEMP_MARKER_LOCATION2,
    ID: "marker2",
    image: require('../assets/images/profile2.png')
};
const TEMP_MARKER_DATA3 = {
    name: TEMP_MARKER_NAME,
    rating: TEMP_MARKER_RATING,
    distance: TEMP_MARKER_DISTANCE,
    location: TEMP_MARKER_LOCATION3,
    ID: "marker3",
    image: require('../assets/images/profile2.png')
};
const TEMP_MARKER_DATA_ARRAY = [TEMP_MARKER_DATA1,TEMP_MARKER_DATA2,TEMP_MARKER_DATA3];


class HomeAlternate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authentication_token: '',
            email: '',
            pressable: false,
            ID: '',
            tourInfo: {
                city: '',
                name: '',
                duration: '',
                description: '',
                tourID: '',
            },
            profileInfo: {
                firstname: '',
                lastname: '',
                id: '',
                description: '',
                distance: '',
                email: '',
                phone_number: '',
                profile_image: '',
                image: ''
            },
            tourArray: []
        };
        this.handleMarkerPress = this.handleMarkerPress.bind(this);
    };

    async componentDidMount() {
        let storedToken = await AsyncStorage.getItem('authentication_token')
        let storedEmail = await AsyncStorage.getItem('email')
        this.setState( {
            authentication_token: storedToken,
            email: storedEmail
        })
        if (this.props.tourArray !== undefined) {
            this.setState({ tourArray: this.props.tourArray})
        }
    };

    componentWillReceiveProps(nextProps) {
        /*if (nextProps.profileError && nextProps.profileError !== this.props.profileError) {
            this.props.alertWithType('error','Error',nextProps.profileError);
        } else if(nextProps.profileResult && nextProps.profileResult !== this.props.profileResult) {
            this.props.navigation.navigate('UserProfile');
            //this.props.navigation.pop('HomeAlternate');
        }*/
        if (nextProps.activeProfileError && nextProps.activeProfileError !== this.props.activeProfileError) {
            this.props.alertWithType('error','Error',nextProps.activeProfileError);
        } else if(nextProps.activeProfileResult && nextProps.activeProfileResult !== this.props.activeProfileResult) {
            this.props.navigation.navigate('UserProfile');
            //this.props.navigation.pop('HomeAlternate');
        } else if (nextProps.reservationError && nextProps.reservationError !== this.props.reservationError) {
            this.props.alertWithType('error','Error',nextProps.reservationError);
        } else if(nextProps.reservationResult && nextProps.reservationResult !== this.props.reservationResult) {
            //console.log(nextProps.reservationResult);
            this.props.navigation.navigate('Notifications')
        } else if (nextProps.logoutError && nextProps.logoutError !== this.props.logoutError) {
            this.props.alertWithType('error','Error',nextProps.logoutError);
          } else if(nextProps.logoutResult && nextProps.logoutResult !== this.props.logoutResult) {
            console.log(nextProps.logoutResult);
            this.props.navigation.navigate('Login')
          } else if (nextProps.tourArray && nextProps.tourArray !== this.props.tourArray) {
              this.setState({ tourArray: nextProps.tourArray})
          }
    }

    

    handleRegionChange = (location) => {
        //console.log("---------tour array--------")
        //console.log(this.props.tourArray)
        this.props.dispatch(changeTourLocationValue(location))
    };

    handleListPress = () => {
        this.props.navigation.navigate('Profile');
    }

    handleSettingsPress = () => {
        this.props.navigation.navigate('Settings');
    }
    

    handleMarkerPress = () => {

        console.log("******************************************************************************************")
        this.props.dispatch(pressActiveProfileView(this.state.profileInfo,this.state.authentication_token,this.state.email));


        //this.props.dispatch(pressProfileView(this.state.ID,this.state.authentication_token,this.state.email,this.state.tourInfo));
        //this.props.navigation.navigate('TourGuide');
    };

    handleNotifications = () => {
        this.setState({ isModalVisible: false })
        this.props.dispatch(checkActiveReservationTourist(this.props.profileID,
          this.state.authentication_token,this.state.email))
        //this.props.navigation.navigate('Requests')
      }

      handleLogout = () => {
        this.setState({ isModalVisible: false});
        this.props.dispatch( sendLogOutRequest(this.state.authentication_token,this.state.email) )
        //this.props.navigation.navigate('Requests')
      }

    state = {
    isModalVisible: false
    };
 
    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

    profileButton(){
    const { navigate } = this.props.navigation;
    return (
        <TouchableOpacity
        underlayColor="#FFF"
        onPress={()=> {this.setState({ isModalVisible: false }); navigate('MyTouristProfile')}} >
        <Text style={screenStyles.settingText}>My Profile</Text> 
        </TouchableOpacity>
        )
    }

    homePage(){
    //const { navigate } = this.props.navigation;
    return (
        <TouchableOpacity
        underlayColor="#FFF"
        //onPress={()=> {this.setState({ isModalVisible: false }); navigate('HomeAlternate')}} 
        >
        <Text style={screenStyles.settingText}>Home</Text> 
        </TouchableOpacity>
        )
    }

    notificationsButton() {
        const { navigate } = this.props.navigation;
        return (
            <TouchableOpacity
            underlayColor="#FFF"
            onPress={this.handleNotifications} >
                <Text style={screenStyles.settingText}>Notifications</Text> 
            </TouchableOpacity>
            )
      }

      logoutButton() {
        const { navigate } = this.props.navigation;
        return (
            <TouchableOpacity
            underlayColor="#FFF"
            onPress={this.handleLogout} >
                <Text style={screenStyles.settingText}>Logout</Text> 
            </TouchableOpacity>
            )
      }




    render() {
        return (
            <View >
            <View style={styles.container}>

                
                <MapView
                style={styles.map}
                initialRegion={TEMP_INITIAL_REGION}
                onRegionChangeComplete={this.handleRegionChange}
                >

                
                
                    {this.state.tourArray.map((data) => {
                    return (
                        <MapView.Marker
                        key={data.id}
                        coordinate={{
                            latitude: data.latitude,
                            longitude: data.longitude,
                            latitudeDelta: 0.00922,
                            longitudeDelta: 0.00421
                        }}
                        //onCalloutPress={this.state.pressable ? this.handleMarkerPress(data.traveler_id): null}
                        description={data.firstname + ' ' + data.lastname}
                        //image={require('../assets/images/blankAvatar.png')}
                        //image={ data.profile_image}
                        //image={data.image}

                       
                        onPress={() => {this.setState({
                            profileInfo: {
                                firstname: data.firstname,
                                lastname: data.lastname,
                                id: data.id,
                                description: data.description,
                                distance: data.distance,
                                email: data.email,
                                phone_number: data.phone_number,
                                profile_image: data.profile_image,
                                image: data.image
                            }
                        })
                        }}

                        >
                        
                        <MapView.Callout
                        //onPress={this.handleMarkerPress}
                        >
                            <CalloutContent
                            //markerTitle={data.traveler_id}

                            //markerDescription={data.title}
                           
                            handlePress = {this.handleMarkerPress}
                            markerDescription={'View Profile'}

                            markerTitle={data.firstname + ' ' + data.lastname}

                            
                            />
                        </MapView.Callout>
                        </MapView.Marker>
                    )
                    })}
                </MapView>

             
                
          
                
            </View>

            <View style={screenStyles.mapSettingsBox}>
        
                <TouchableOpacity onPress={this._toggleModal} underlayColor="#FFF">
                        <Icon name="ios-menu" style={screenStyles.mapSettingsIcon} size={45} />
                </TouchableOpacity>
            </View>

            <Modal isVisible={this.state.isModalVisible}
            backdropOpacity={0.4}
            onBackdropPress={() => this.setState({ isModalVisible: false }) }
            supportedOrientations={['portrait', 'landscape']}
            animationIn={'slideInLeft'}
            animationOut={'slideOutRight'}
            >
                <View style={screenStyles.newSettingWindow}>
             

                

                    {this.homePage()}
                    <View style={screenStyles.border}></View>  
                    {this.profileButton()}
                    <View style={screenStyles.border}></View>
                    {this.notificationsButton()} 
                    <View style={screenStyles.border}></View>
                    {this.logoutButton()} 

                </View>

            </Modal>

                
        </View>
           
            
        );
    };
};

const mapStateToProps = (state) => {
    const mapLocation = state.TourList.location;
    const tourArray = state.TourList.result.travelers;
    

    const profileError = state.ViewProfile.errors;
    const profileResult = state.ViewProfile.result;

    const activeProfileError = state.ViewProfile.activeErrors;
    const activeProfileResult = state.ViewProfile.activeResult;
    
    const reservationResult = state.ActiveReservation.result;
    const reservationError = state.ActiveReservation.errors;

    const profileID = state.MyProfile.result[0];

    const logoutResult = state.LogOut.result;
    const logoutError = state.LogOut.errors;

    return {
        mapLocation,
        tourArray,
        profileError,
        profileResult,
        activeProfileError,
        activeProfileResult,
        reservationResult,
        reservationError,
        profileID,
        logoutResult,
        logoutError
    };
};

export default connect(mapStateToProps)(connectAlert(HomeAlternate));

        
