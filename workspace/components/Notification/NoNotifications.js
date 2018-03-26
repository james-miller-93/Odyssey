import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, Image} from 'react-native';
import {ButtonText} from './index';
import Icon from 'react-native-vector-icons/EvilIcons';

import styles from './styles';

const profilePic = require('../Container/profilePic.png');

export default class NoNotification extends Component {


    render() {
    	return (
    
    		<View style={styles.noNotificationContainer}>

            <Icon name="bell" style={styles.bellIcon} size={45} />
            <Text> You have no notifications yet. </Text> 
        </View>
         
    )
   }
}