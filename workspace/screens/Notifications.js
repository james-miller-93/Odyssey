import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView,
    ImageBackground, Image ,TouchableOpacity,
    AsyncStorage } from 'react-native';
import { ButtonText, ButtonContainer} from '../components/Button';
import styles from '../screens/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { TravelerNotification, NoNotifications } from '../components/Notification';
import Modal from "react-native-modal";
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';

import { connectAlert } from '../components/Alert';

import { sendLogOutRequest } from '../actions/LogOut';


class Notifications extends Component {

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
        <Text style={styles.settingText}>My Profile</Text> 
        </TouchableOpacity>
        )
    }

    ifIsNotifications(value) {

        if(value && value.length > 0) {

            return (
                    value.map((data) => {
                        return (
                        <TravelerNotification
                        key={data.id}
                        navigation = {this.props.navigation}
                        handleAcceptPress={this.acceptReservation}
                        handleDeclinePress={this.declineReservation}
                        tourguideFirstName={data.guide_firstname}
                        tourguideLastName={data.guide_lastname}
                        message={data.status}
                        />
                    )
                })
            )

        }
        else {
            console.log("here")
            return (
            <NoNotifications/>

            )
        }
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

      homePage(){
    const { navigate } = this.props.navigation;
    return (
        <TouchableOpacity
        underlayColor="#FFF"
        onPress={()=> {this.setState({ isModalVisible: false }); navigate('HomeAlternate')}} 
        >
        <Text style={styles.settingText}>Home</Text> 
        </TouchableOpacity>
        )
    }

    notificationsButton() {
        //const { navigate } = this.props.navigation;
        return (
            <TouchableOpacity
            underlayColor="#FFF"
            //onPress={this.handleNotifications}
             >
                <Text style={styles.settingText}>Notifications</Text> 
            </TouchableOpacity>
            )
      }


      async componentDidMount() {
        let storedToken = await AsyncStorage.getItem('authentication_token')
        let storedEmail = await AsyncStorage.getItem('email')
        this.setState( {
            authentication_token: storedToken,
            email: storedEmail
        })
      };

      componentWillReceiveProps(nextProps) {
        if (nextProps.logoutError && nextProps.logoutError !== this.props.logoutError) {
          this.props.alertWithType('error','Error',nextProps.logoutError);
        } else if(nextProps.logoutResult && nextProps.logoutResult !== this.props.logoutResult) {
          console.log(nextProps.logoutResult);
          this.props.navigation.navigate('Login')
        }
      }

    handleLogout = () => {
        this.setState({ isModalVisible: false});
        this.props.dispatch( sendLogOutRequest(this.state.authentication_token,this.state.email) )
        //this.props.navigation.navigate('Requests')
      }

   render() {

        return (
    
    	<View >
        
        	<View style={styles.settingsBox}>
        
                <TouchableOpacity onPress={this._toggleModal} underlayColor="#FFF">
                        <Icon name="ios-menu" style={styles.settingsIcon} size={45} />
                </TouchableOpacity>
            </View>

            <Modal isVisible={this.state.isModalVisible}
            backdropOpacity={0.4}
            onBackdropPress={() => this.setState({ isModalVisible: false }) }
            supportedOrientations={['portrait', 'landscape']}
            animationIn={'slideInLeft'}
            animationOut={'slideOutRight'}
            //animation='none'
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
        

          	<View style={{top: 120, width: '100%'}}> 

                {this.ifIsNotifications(this.props.reservations)}
             
           </View>
           
                
     
        </View>
    
    
        );
    };

};

const mapStateToProps = (state) => {
    const reservations = state.ActiveReservation.result.reservation;
    
    const myID = state.MyProfile.result[0];

    const logoutResult = state.LogOut.result;
    const logoutError = state.LogOut.errors;

    return {
        reservations,
        myID,
        logoutResult,
        logoutError
    }
}

export default connect(mapStateToProps)(connectAlert(Notifications))