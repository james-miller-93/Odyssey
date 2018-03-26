import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView} from 'react-native';
import {ButtonText} from '../Button'
import { GeneralTextInput } from '../TextInput';

import styles from './styles';

export default class UserRoleContainer extends Component {


    render() {
    	return (
        <ScrollView contentContainerStyle = {styles.SignUpContainer}>
        
        <Text style={[styles.title, {top:140}]}>Are You A...</Text>
    	<View style={styles.SignUpContainer}>
        
           
            <ButtonText 
            displayText = {"Traveler"} 
            bgColor = {{backgroundColor: '#80808050', margin: 15}} 
            handlePress = {this.props.handleTravelerPress}
            />

            <ButtonText 
            displayText = {"Local"} 
            bgColor = {{backgroundColor: '#80808050', margin: 15}} 
            handlePress = {this.props.handleLocalPress}
            />

    	</View> 
        </ScrollView>
    )
   }
}