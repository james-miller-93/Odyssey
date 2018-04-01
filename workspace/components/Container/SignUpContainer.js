import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView} from 'react-native';
import {ButtonText} from '../Button'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import { GeneralTextInput } from '../TextInput';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default class SignUpContainer extends Component {


    render() {
    	return (
        
            <View style={styles.SignUpContainer}>

            
             <View style={{width: 60, height: 50, top: 25, left:10, position: 'absolute'}}>
            
                <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('Login')}} underlayColor="#FFF">
                    <Icon name="arrow-left" style={{left: 0, position: 'absolute'}} size={27} />
                </TouchableOpacity>
            </View>

          <KeyboardAwareScrollView      
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.SignUpContainer}
            >
            
            <Text style={[styles.title, {paddingBottom: 15}]}>Sign Up</Text>
                
        		<GeneralTextInput
                        displayText={'First Name'}
                        handleTextChange={this.props.firstname} />

                    <GeneralTextInput
                        displayText={'Last Name'}
                        handleTextChange={this.props.lastname} />

                    <GeneralTextInput
                        handleTextChange={this.props.email}
                        displayText={'Email'} />

                    <GeneralTextInput
                        handleTextChange={this.props.phone}
                        displayText={'Phone'} />
                    
                    <GeneralTextInput
                        handleTextChange={this.props.location}
                        displayText={'City, Country'}/>

                    <GeneralTextInput
                        handleTextChange={this.props.password}
                        displayText={'Password'}
                        secure={true}/>

                    <GeneralTextInput
                        handleTextChange={this.props.passwordConfirm}
                        displayText={'Confirm Password'}
                        secure={true}/>
                
                <ButtonText
                    displayText = {"Sign Up"}
                    bgColor = {{backgroundColor: '#80808090', top: 20, width: 150}}
                    handlePress={this.props.handlePress}/>
           
            </KeyboardAwareScrollView>

             </View>
        )
   }
}