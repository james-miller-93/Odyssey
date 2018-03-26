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
        
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}} underlayColor="#FFF">
            <Icon name="arrow-left" style={{left: 0, position: 'absolute'}} size={27} />
            </TouchableOpacity>
        </View>

      <KeyboardAwareScrollView
              //style={styles.SignUpContainer}
              resetScrollToCoords={{ x: 0, y: 0 }}
              contentContainerStyle={styles.SignUpContainer}
              //scrollEnabled={false}
              //style={{ paddingBottom: 50, width: '100%', height: '100%' }}
            >
        
        <Text style={[styles.title, {paddingBottom: 15}]}>Sign Up</Text>
    	
            
    		<GeneralTextInput
                    displayText={'First Name'}
                    handleTextChange={this.props.firstname}
                    //handleTextChange={(val) => this.setState({email: val})}
                />
                <GeneralTextInput
                    displayText={'Last Name'}
                    handleTextChange={this.props.lastname}
                    //handleTextChange={(val) => this.setState({email: val})}
                />
                <GeneralTextInput
                    handleTextChange={this.props.email}
                    displayText={'Email'}
                    //handleTextChange={(val) => this.setState({password: val})}
                    //secure={true}
                />

                <GeneralTextInput
                    handleTextChange={this.props.phone}
                    displayText={'Phone'}
                    //handleTextChange={(val) => this.setState({password: val})}
                   
                />
                
                <GeneralTextInput
                    handleTextChange={this.props.location}
                    displayText={'City, Country'}
                    //handleTextChange={(val) => this.setState({password: val})}
                  
                />
                <GeneralTextInput
                    handleTextChange={this.props.password}
                    displayText={'Password'}
                    //handleTextChange={(val) => this.setState({password: val})}
                    secure={true}
                />
                <GeneralTextInput
                    handleTextChange={this.props.passwordConfirm}
                    displayText={'Confirm Password'}
                    //handleTextChange={(val) => this.setState({password: val})}
                    secure={true}
                />
            
            <ButtonText
                displayText = {"Sign Up"}
                bgColor = {{backgroundColor: '#80808090', top: 20, width: 150}}
                handlePress={this.props.handlePress}/>

    	
       
         </KeyboardAwareScrollView>

         </View>
    )
   }
}