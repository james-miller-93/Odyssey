import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView, Dimensions, Image} from 'react-native';
import {ButtonText} from '../Button'
import { GeneralTextInput } from '../TextInput';
import styles from './styles';
import Icon3 from 'react-native-vector-icons/Feather';
const headerImage = require('./orangeHeader.jpg');
const profilePic = require('./profilePic.png');

export default class UserProfileContainer extends Component {

    render() {

    	return (
      
        <View> 
   
          <View style={styles.foregroundContainer}>
            <View style={{width: 60, height: 50, top: 25, left:10, position: 'absolute'}}>
          
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('HomeAlternate')}} underlayColor="#FFF">
                <Icon name="arrow-left" style={{left: 0, position: 'absolute'}} size={27} />
              </TouchableOpacity>

            </View>

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


