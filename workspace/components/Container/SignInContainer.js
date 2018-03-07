import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView} from 'react-native';
import {ButtonText} from '../Button'
import { GeneralTextInput } from '../TextInput';

import styles from './styles';

export default class SignInContainer extends Component {


    render() {
    	return (
        <ScrollView contentContainerStyle = {styles.SignUpContainer}>
        
        <Text style={styles.title}>Login</Text>
    	<View style={styles.SignUpContainer}>
            

                <GeneralTextInput
                    displayText={'Email'}
                    handleTextChange={this.props.emailChange}
                    //handleTextChange={(val) => this.setState({password: val})}
                    //secure={true}
                />
                <GeneralTextInput
                    displayText={'Password'}
                    handleTextChange={this.props.passwordChange}
                    //handleTextChange={(val) => this.setState({password: val})}
                    secure={true}
                />
           
        
            <ButtonText displayText = {"Login"} bgColor = {{backgroundColor: '#80808090', top: 40, width: 150}} 
            handlePress = {this.props.role}
            />

    	</View> 
        </ScrollView>
    )
   }
}