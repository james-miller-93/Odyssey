import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView} from 'react-native';
import {ButtonText} from '../Button'
import { GeneralTextInput } from '../TextInput';

import styles from './styles';

export default class SignUpContainer extends Component {


    render() {
    	return (
        <ScrollView contentContainerStyle = {styles.SignUpContainer}>
        
        <Text style={styles.title}>Sign Up</Text>
    	<View style={styles.SignUpContainer}>
            
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
                    handleTextChange={this.props.password}
                    displayText={'Password'}
                    //handleTextChange={(val) => this.setState({password: val})}
                    //secure={true}
                />
                <GeneralTextInput
                    handleTextChange={this.props.passwordConfirm}
                    displayText={'Confirm Password'}
                    //handleTextChange={(val) => this.setState({password: val})}
                    //secure={true}
                />
        
            <ButtonText
                displayText = {"Sign Up"}
                bgColor = {{backgroundColor: '#80808090', top: 40, width: 150}}
                handlePress={this.props.handlePress}/>

    	</View> 
        </ScrollView>
    )
   }
}