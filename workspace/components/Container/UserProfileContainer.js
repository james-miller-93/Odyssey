import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView, Dimensions, Image} from 'react-native';
import {ButtonText} from '../Button'
import { GeneralTextInput } from '../TextInput';
//import ImageHeader from 'react-native-image-header';
import styles from './styles';
//import {PropTypes} from 'react';

const headerImage = require('./orangeHeader.jpg');
const profilePic = require('./profilePic.png');

export default class UserProfileContainer extends Component {

    render() {

    	return (
      
      <View>

      
 
        <View style={styles.foregroundContainer}>
          <Image
            source={profilePic}
            style={styles.userImage}
            resizeMode="contain"
          />
          <View style={{ backgroundColor: 'transparent' }}>
            <Text style={{ color: '#FFF', fontSize: 23 }}>Donald Duck</Text>
            <Text style={{ color: '#FFF', fontSize: 20 }}>d.duck</Text>
          </View>
          <View style={styles.logoutButton}>
            <TouchableOpacity>
              <Text style={{ color: '#FFF', fontSize: 17 }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
  
    
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 600 }}>
        <Text>Content</Text>
      </View>
 </View>

    )
}
 };


