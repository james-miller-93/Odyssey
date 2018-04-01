import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView} from 'react-native';
import {ButtonText} from '../Button'
import { GeneralTextInput } from '../TextInput';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default class SignInContainer extends Component {


    render() {
    	return (


                <View style={styles.SignUpContainer}>
                
                 <View style={{width: 60, height: 50, top: 25, left:10, position: 'absolute'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}} underlayColor="#FFF">
                        <Icon name="arrow-left" style={{left: 0, position: 'absolute'}} size={27} />
                    </TouchableOpacity>
                </View>

                
                <Text style={styles.loginTitle}>Login</Text>
           
                
                        <GeneralTextInput
                            displayText={'Email'}
                            handleTextChange={this.props.emailChange}            
                        />
                        <GeneralTextInput
                            displayText={'Password'}
                            handleTextChange={this.props.passwordChange}
                            secure={true}
                        />
                   
                
                    <ButtonText displayText = {"Login"} bgColor = {{backgroundColor: '#80808090', top: 40, width: 150}} 
                    handlePress = {this.props.role}
                    />

            	</View> 
          
        )
    }
}