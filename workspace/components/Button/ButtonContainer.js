import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button} from 'react-native';
import {OdysseyButtonText} from './index'

import styles from './styles';

export default class ButtonContainer extends Component {


    render() {
    	return (
    	<View style={styles.buttonContainer }>
    		<OdysseyButtonText displayText = {"Sign Up"} bgColor = {{ backgroundColor: '#F9A602'}} 
             handlePress={this.props.signUp} />
            <OdysseyButtonText displayText = {"Login"} bgColor = {{ backgroundColor: '#F9A602'}} 
            handlePress={this.props.login} />
            

            {/*<View >
                    <Text style={styles.buttonText}>————— or —————</Text>
            </View>

            <ButtonText displayText = {"Continue with Facebook"} bgColor = {{ backgroundColor: '#4682B4'}} />*/}
            
    	</View> 
    )
   }
}