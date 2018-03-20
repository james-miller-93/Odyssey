import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground, Image ,TouchableOpacity, AsyncStorage} from 'react-native';
import { ButtonText, ButtonContainer} from '../components/Button';
import styles from '../screens/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { RequestsContainer } from '../components/Requests';
import Modal from "react-native-modal";
import { Card } from 'react-native-elements'
import { connect } from 'react-redux';
import { connectAlert } from '../components/Alert';

import { acceptActiveReservation,
    declineActiveReservation } from '../actions/ActiveReservation';
import { sendLogOutRequest } from '../actions/LogOut';



class Requests extends Component {

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
        onPress={()=> {this.setState({ isModalVisible: false }); navigate('MyGuideProfile')}} >
        <Text style={styles.settingText}>My Profile</Text> 
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

      handleLogout = () => {
        this.setState({ isModalVisible: false});
        this.props.dispatch( sendLogOutRequest(this.state.authentication_token,this.state.email) )
        //this.props.navigation.navigate('Requests')
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
        if (nextProps.actionErrors && nextProps.actionErrors !== this.props.actionErrors) {
            this.props.alertWithType('error','Error',nextProps.actionErrors);
        } else if(nextProps.actionResult && nextProps.actionResult !== this.props.actionResult) {
            this.props.alertWithType('success','Success','Action Successful');
        } else if (nextProps.logoutError && nextProps.logoutError !== this.props.logoutError) {
            this.props.alertWithType('error','Error',nextProps.logoutError);
        } else if(nextProps.logoutResult && nextProps.logoutResult !== this.props.logoutResult) {
            console.log(nextProps.logoutResult);
            this.props.navigation.navigate('Login')
        }
    }


   render() {

        return (
    
    	<View style={styles.notification}>
        
        	<View style={styles.settingsBox}>
        
                <TouchableOpacity onPress={this._toggleModal} underlayColor="#FFF">
                        <Icon name="ios-menu" style={styles.settingsIcon} size={45} />
                </TouchableOpacity>
            </View>

            <Modal isVisible={this.state.isModalVisible}
            backdropOpacity={0.4}
            onBackdropPress={() => this.setState({ isModalVisible: false }) }
            supportedOrientations={['portrait', 'landscape']}
            //animation='none'
            >
                <View style={styles.settingWindow}>
                                
                    {this.profileButton()}
                    <View style={styles.border}></View>
                    <Text style={styles.settingText}>Notifications</Text> 
                    <View style={styles.border}></View>
                    {this.logoutButton()}

                </View>

            </Modal>
        
          	<View style={{top: 120}}> 

            {this.props.reservations.map((data) => {
                if (data.guide_id === this.props.myID )    
                    return (
                        <RequestsContainer
                        key={data.id}
                        navigation = {this.props.navigation}
                        handleAcceptPress={() => {
                            this.props.dispatch(acceptActiveReservation(data.id,
                                this.state.authentication_token,this.state.email))
                        }}
                        handleDeclinePress={() => {
                            this.props.dispatch(declineActiveReservation(data.id,
                                this.state.authentication_token,this.state.email))
                        }}
                        travelerName={''}
                        />
                    )
            })}

             
           </View>
           
                
     
        </View>
    
    
        );
    };

};

const mapStateToProps = (state) => {
    const reservations = state.ActiveReservation.result.reservation;
    
    const myID = state.MyProfile.result[0];

    const actionResult = state.ActiveReservation.actionResult;
    const actionErrors = state.ActiveReservation.actionErrors;

    const logoutResult = state.LogOut.result;
    const logoutError = state.LogOut.errors;

    return {
        reservations,
        myID,
        actionResult,
        actionErrors,
        logoutResult,
        logoutError
    }
}

export default connect(mapStateToProps)(connectAlert(Requests));