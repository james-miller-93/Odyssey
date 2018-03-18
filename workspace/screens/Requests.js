import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground, Image ,TouchableOpacity} from 'react-native';
import { ButtonText, ButtonContainer} from '../components/Button';
import styles from '../screens/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { RequestsContainer } from '../components/Requests';
import Modal from "react-native-modal";
import { Card } from 'react-native-elements'
import { connect } from 'react-redux';
import { connectAlert } from '../components/Alert';



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

    acceptReservation = () => {

    }

    declineReservation = () => {

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
                    <Text style={styles.settingText}>Logout</Text> 

                </View>

            </Modal>
        
          	<View style={{top: 120}}> 

            {this.props.reservations.map((reserv) => {
                return (
                    <RequestsContainer
                    handleAcceptPress={this.acceptReservation}
                    handleDeclinePress={this.declineReservation}
                    />
                )
            })}

            <RequestsContainer navigation = {this.props.navigation} travelerName = {"TRAVELER NAME"} />
            <RequestsContainer navigation = {this.props.navigation} travelerName = {"TRAVELER NAME"} 
           /> 
           </View>
           
                
     
        </View>
    
    
        );
    };

};

const mapStateToProps = (state) => {
    const reservations = [];

    return {
        reservations
    }
}

export default connect(mapStateToProps)(connectAlert(Requests));