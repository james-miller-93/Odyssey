import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, ImageBackground, TextInput,ScrollView} from 'react-native';
import {ButtonText} from './index';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
//import CheckBox from 'react-native-check-box';
import { CheckBox } from 'react-native-elements'

import styles from './styles';

const profilePic = require('../Container/profilePic.png');

export default class CreateTourContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
        checked: false
    };
  };

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
          onPress={()=> {this.props.navigation.navigate('ManageTours');}}/>
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
 
            
            <View style={styles.tourName}> 
            	<TextInput
            	style={styles.generalTextInput}
	            placeholder="TOUR NAME"
	            placeholderTextColor={'#C0C0C0'}
	            //secureTextEntry={this.props.secure}
	            onChangeText={this.props.handleTextChange}
	            adjustsFontSizeToFit
            />
            </View>
           
         
            <View style={styles.location}>
            <TextInput
            style={styles.generalTextInput}
            placeholder="LOCATION"
            placeholderTextColor={'#C0C0C0'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
            </View>
              


        <View style={styles.personalInfoContainer}>
            <Text style={styles.personalInfo}>
            Description
            </Text>
            </View>


            <View style={styles.textInputContainer}>
            <TextInput
            style={styles.aboutText}
            placeholder={this.props.oldValue}
            placeholderTextColor={'#000'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            editable= {true}
            />
            </View>    


        <View style={{flexDirection: 'row', marginTop: 40}}>
           
           <View style={{flexDirection: 'column', left: 8}}>
            <Text style={styles.subtitle}>
            No. of People
            </Text>
            <Text style={styles.subtitle}>
            Languages
            </Text>
            <Text style={styles.subtitle}>
            Tour Duration
            </Text>
            <Text style={styles.subtitle}>
            Price
            </Text>
          
          </View>
          
          <View style={{flexDirection: 'column'}}>
            <View style={styles.textInputContainer}>
            <TextInput
            style={[styles.generalTextInput , {width: 150}]}
            placeholder={this.props.oldValue}
            placeholderTextColor={'#FFFFFF'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
            </View>
                
            <View style={styles.textInputContainer}>
            <TextInput
            style={[styles.generalTextInput , {width: 240}]}
            placeholder={this.props.oldValue}
            placeholderTextColor={'#FFFFFF'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
            </View>
         
            <View style={styles.textInputContainer}>
            <TextInput
            style={[styles.generalTextInput , {width: 150}]}
            placeholder={this.props.oldValue}
            placeholderTextColor={'#FFFFFF'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
            </View>

            <View style={[styles.textInputContainer, {flexDirection: 'row'} ]}>
            <TextInput
            style={[styles.generalTextInput , {width: 90, fontSize: 15}]}
            placeholder='Currency'
            placeholderTextColor={'#C0C0C0'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
          	
            <Text>  </Text>
            <TextInput
            style={[styles.generalTextInput , {width: 90, fontSize: 15}]}
            placeholder="Amount"
            placeholderTextColor={'#C0C0C0'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
            </View>

        </View>

      
 </View>

<View style={[styles.personalInfoContainer, {marginBottom:10}]}>
            <Text style={styles.personalInfo}>
            Specialities
            </Text>
            </View>

     <View style={{flexDirection: 'row'}}>
     <CheckBox
  center
  title='Nightlife'
  iconRight
  //iconType='material'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checkedColor='black'
  checked={this.state.checked}
  //onIconPress={() => { this.setState({ checked: !this.state.checked })}}
  onPress={() => { this.setState({ checked: !this.state.checked })} }
/>
<CheckBox
  center
  title='Food'
  iconRight
  //iconType='material'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checkedColor='black'
  //checked={this.state.checked}
/>
	
 </View>
 <View style={{flexDirection: 'row'}}>
     <CheckBox
  center
  title='Museums'
  iconRight
  //iconType='material'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checkedColor='black'
  //checked={this.state.checked}
/>
<CheckBox
  center
  title='Outdoors'
  iconRight
  //iconType='material'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checkedColor='black'
  //checked={this.state.checked}
/>


</View>
<View style={{flexDirection: 'row'}}>
<CheckBox
  center
  title='Landmarks'
  iconRight
  //iconType='material'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checkedColor='black'
  //checked={this.state.checked}
/>
     <CheckBox
  center
  title='Daytrip'
  iconRight
  //iconType='material'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checkedColor='black'
  //checked={this.state.checked}
/>
 </View>


        <View style={{padding:100}}/>
        </ScrollView>
        </View>
      );

    };
};