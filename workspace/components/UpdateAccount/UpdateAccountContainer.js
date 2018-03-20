import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, ImageBackground, TextInput,ScrollView} from 'react-native';
import {ButtonText} from './index';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons'

import styles from './styles';

const profilePic = require('../Container/profilePic.png');

export default class UpdateAccountContainer extends Component {


    render() {
      //const { navigate } = this.props.navigation;
    	return (
        <View>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
                          style={styles.generalSave}
                          //onPress={this.props.handleDeclinePress}

                          >
          <Icon1 name="close" style={styles.closeIcon} size={32} 
          onPress={()=> {this.props.navigation.navigate('UserProfile');}}/>
          </TouchableOpacity>
          <View style= {styles.saveContainer}>
                         
                          <TouchableOpacity
                          style={styles.generalSave}
                          //onPress={this.props.handleDeclinePress}

                          >

                          <View >
                              <Text style={styles.saveText}>Save</Text>
                          </View>
                          
                          </TouchableOpacity>
        </View>
        </View>
 
    		<ScrollView style={styles.generalContainer}>
 
            <View style={styles.imageContainer}>
            <ImageBackground
              style={styles.userImage}
              source={profilePic}
              //source={{ uri: this.props.traveler.image}}
            >
            <View style={styles.editContainer}>
             <TouchableOpacity
                          //style={styles.generalSave}
                          //onPress={this.props.handleDeclinePress}

                          >
          <Icon2 name="edit" style={styles.editIcon} size={32} />
          </TouchableOpacity>

           </View> 
           </ImageBackground>
            </View>

            <View style={styles.personalInfoContainer}>
            <Text style={styles.personalInfo}>
            Personal Information
            </Text>
            </View>
            

            <View style={{flexDirection: 'row'}}>
           
           <View style={{flexDirection: 'column'}}>
            <Text style={styles.subtitle}>
            Name
            </Text>
            <Text style={styles.subtitle}>
            Email
            </Text>
            <Text style={styles.subtitle}>
            Phone
            </Text>
          
          </View>
          
          <View style={{flexDirection: 'column'}}>
            <View style={styles.textInputContainer}>
            <TextInput
            style={styles.generalTextInput}
            placeholder={this.props.oldValue}
            placeholderTextColor={'#FFFFFF'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
            </View>
                
          
          
            <View style={styles.textInputContainer}>
            <TextInput
            style={styles.generalTextInput}
            placeholder={this.props.oldValue}
            placeholderTextColor={'#FFFFFF'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
      
            </View>

            <View style={styles.textInputContainer}>
            <TextInput
            style={styles.generalTextInput}
            placeholder={this.props.oldValue}
            placeholderTextColor={'#FFFFFF'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
      
            </View>

        </View>

        </View>

        <View style={styles.personalInfoContainer}>
            <Text style={styles.personalInfo}>
            Optional Information
            </Text>
            </View>

        <View style={{flexDirection: 'row'}}>
           
           <View style={{flexDirection: 'column'}}>
            <Text style={styles.subtitle}>
            Location
            </Text>
            <Text style={styles.subtitle}>
            Birthday
            </Text>
            <Text style={styles.subtitle}>
            Gender
            </Text>
          
          </View>
          
          <View style={{flexDirection: 'column'}}>
            <View style={styles.textInputContainer}>
            <TextInput
            style={[styles.generalTextInput , {width: 275}]}
            placeholder={this.props.oldValue}
            placeholderTextColor={'#FFFFFF'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
            </View>
                
          
          
            <View style={[styles.textInputContainer, {flexDirection: 'row'} ]}>
            <TextInput
            style={[styles.generalTextInput , {width: 70}]}
            placeholder='MM'
            placeholderTextColor={'#000'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
            <Text style={{fontSize: 22}}> / </Text>
            <TextInput
            style={[styles.generalTextInput , {width: 70}]}
            placeholder='DD'
            placeholderTextColor={'#000'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
            <Text style={{fontSize: 22}}> / </Text>
            <TextInput
            style={[styles.generalTextInput , {width: 100}]}
            placeholder="YYYY"
            placeholderTextColor={'#000'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
            </View>

            <View style={styles.textInputContainer}>
            <TextInput
            style={[styles.generalTextInput , {width: 275}]}
            placeholder={this.props.oldValue}
            placeholderTextColor={'#FFFFFF'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
      
            </View>

        </View>

        </View>

        <View style={styles.personalInfoContainer}>
            <Text style={styles.personalInfo}>
            Change Password
            </Text>
            </View>
            

            <View style={{flexDirection: 'row'}}>
           
           <View style={{flexDirection: 'column'}}>
            <Text style={styles.subtitle}>
            Current
            </Text>
            <Text style={styles.subtitle}>
            New
            </Text>
            <Text style={styles.subtitle}>
            Confirm
            </Text>
          
          </View>
          
          <View style={{flexDirection: 'column'}}>
            <View style={styles.textInputContainer}>
            <TextInput
            style={[styles.generalTextInput , {width: 280}]}
            placeholder={this.props.oldValue}
            placeholderTextColor={'#FFFFFF'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
            </View>
                
          
          
            <View style={styles.textInputContainer}>
            <TextInput
            style={[styles.generalTextInput , {width: 280}]}
            placeholder={this.props.oldValue}
            placeholderTextColor={'#FFFFFF'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
      
            </View>

            <View style={styles.textInputContainer}>
            <TextInput
            style={[styles.generalTextInput , {width: 280}]}
            placeholder={this.props.oldValue}
            placeholderTextColor={'#FFFFFF'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
      
            </View>

        </View>

        </View>
        <View style={styles.personalInfoContainer}>
            <Text style={styles.personalInfo}>
            Edit Bio
            </Text>
            </View>

        <View style={{flexDirection: 'row'}}>
           
           <View style={{flexDirection: 'column'}}>
            <Text style={styles.subtitle}>
            About
            </Text>
            
          
          </View>
          
          <View style={{flexDirection: 'column'}}>
            <View style={styles.textInputContainer}>
            <TextInput
            style={[styles.generalTextInput, {height: 100}]}
            placeholder={this.props.oldValue}
            placeholderTextColor={'#FFFFFF'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
            </View>      
            

        </View>

        </View>

         <View style= {[styles.button, {marginTop: 45}]}>
                         
                          <TouchableOpacity
                          style={[styles.generalButton, {borderColor: '#e50000'}]}
                          //onPress={this.props.handleDeclinePress}

                          >

                          <View >
                              <Text style={[styles.buttonText, {color: '#e50000'}]}> Delete Account </Text>
                          </View>
                          
                          </TouchableOpacity>
        </View>


        <View style={{padding:100}}/>
        </ScrollView>
        </View>
      );

    };
};