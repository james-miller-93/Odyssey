import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView} from 'react-native';
import {ButtonText} from '../Button'
import { GeneralTextInput } from '../TextInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';
import styles from './styles';

export default class UserRoleContainer extends Component {


    render() {
    	return (

            <ScrollView contentContainerStyle = {styles.SignUpContainer}>
            
                <Text style={[styles.title, {top:80}]}>Select User Type</Text>

            	<View style={[styles.SignUpContainer, {top:20}]}>


                    
                    <TouchableOpacity
                        style={styles.generalButton}
                        onPress={this.props.handleTravelerPress}

                    >
                    
                    <View style= {{backgroundColor: '#80808050', width: 160, height: 160, borderRadius: 80, alignItems :'center'}}>
                       

                        <Icon1
                        size={90}
                        name="aircraft"
                        underlayColor="transparent"
                        //iconStyle={styles.placeIcon}
  
                        />
                  
                            <Text style={styles.buttonText}> Traveler </Text>
                       
                    </View>

                    </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.generalButton}
                        onPress={this.props.handleLocalPress}

                        >

                    <View style= {{backgroundColor: '#80808050', margin: 15, width: 160, height: 160,  borderRadius: 80, alignItems :'center'}}>
                       
                      
                        <Icon
                        size={90}
                        name="home"
                        underlayColor="transparent"
                        iconStyle={styles.placeIcon}
  
                        />
                  
                            <Text style={styles.buttonText}> Local </Text>
                    
                    </View>
                     </TouchableOpacity>
            	</View> 

            </ScrollView>
        )
    }
}