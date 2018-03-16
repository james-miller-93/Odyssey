import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, Image} from 'react-native';
import {ButtonText} from './index';


import styles from './styles';

const profilePic = require('../Container/profilePic.png');

export default class TravelerNotification extends Component {


    render() {
      const { navigate } = this.props.navigation;
    	return (

    
    		<View style={styles.notificationContainer}>
            <Image
              style={styles.userImage}
              source={profilePic}
            />

            <TouchableOpacity underlayColor="#FFF" onPress= {() => {navigate('UserProfile')}}>
            <Text style={styles.tourGuideName} > {this.props.tourGuideName} </Text>
            </TouchableOpacity>
            <Text style={styles.message}>has {this.props.message} your request</Text>
        </View>
         
    )
   }
}