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

	constructor(props) {
        super(props);
        this.state = {
        	nightLifeChecked: false,
        	foodChecked: false,
        	daytripChecked: false,
        	museumsChecked: false,
        	outdoorsChecked: false,
        	landmarksChecked: false,
        }
}

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
                          onPress={this.props.handleSavePress}

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
            	defaultValue= {this.props.oldName}
	            placeholder="TOUR NAME"
	            placeholderTextColor={'#C0C0C0'}
	            //secureTextEntry={this.props.secure}
	            onChangeText={this.props.name}
	            adjustsFontSizeToFit
            />
            </View>
           
         
            <View style={styles.location}>
            <TextInput
            style={styles.generalTextInput}
            defaultValue={this.props.oldLocation}
            placeholderTextColor={'#C0C0C0'}
            placeholder="LOCATION"
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.location}
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
            defaultValue={this.props.oldDescription}
            placeholderTextColor={'#000'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.description}
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
            defaultValue={this.props.oldMaxPeople}
            placeholderTextColor={'#FFFFFF'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.maxPeople}
            adjustsFontSizeToFit
            />
            </View>
                
            <View style={styles.textInputContainer}>
            <TextInput
            style={[styles.generalTextInput , {width: 240}]}
            defaultValue={this.props.oldLanguages}
            placeholderTextColor={'#FFFFFF'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.languages}
            adjustsFontSizeToFit
            />
            </View>
         
            <View style={styles.textInputContainer}>
            <TextInput
            style={[styles.generalTextInput , {width: 150}]}
            defaultValue={this.props.oldDuration}
            placeholderTextColor={'#FFFFFF'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.duration}
            adjustsFontSizeToFit
            />
            </View>

       
          	
            <Text>  </Text>
            <TextInput
            style={[styles.generalTextInput , {width: 90, fontSize: 15}]}
            defaultValue={this.props.oldPrice}
            placeholderTextColor={'#C0C0C0'}
            //secureTextEntry={this.props.secure}
            onChangeText={this.props.price}
            adjustsFontSizeToFit
            />
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
<<<<<<< HEAD
  checked={this.state.checked}
  //onIconPress={() => { this.setState({ checked: !this.state.checked })}}
  onPress={() => { this.setState({ checked: !this.state.checked })} }
=======
  checked={this.state.nightLifeChecked}
  onPress={()=> { this.setState({ nightLifeChecked: !this.state.nightLifeChecked }); this.props.nightLifePress()}}
  //this.props.nightLife 
  // nightLife = function that would update the 
>>>>>>> dc582c82f5bd3c79757f23d82c1cd6271a0ada7c
/>
<CheckBox
  center
  title='Food'
  iconRight
  //iconType='material'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checkedColor='black'
  checked={this.state.foodChecked}
  onPress={()=> { this.setState({ foodChecked: !this.state.foodChecked }); this.props.foodPress()}}
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
  checked={this.state.museumsChecked}
  onPress={()=> { this.setState({ museumsChecked: !this.state.museumsChecked }); this.props.museumsPress()}}
/>
<CheckBox
  center
  title='Outdoors'
  iconRight
  //iconType='material'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checkedColor='black'
  checked={this.state.outdoorsChecked}
  onPress={()=> { this.setState({ outdoorsChecked: !this.state.outdoorsChecked }); this.props.outdoorsPress()}}
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
  checked={this.state.landmarksChecked}
  onPress={()=> { this.setState({ landmarksChecked: !this.state.landmarksChecked }); this.props.landmarksPress()}}
  /> 
     <CheckBox
  center
  title='Daytrip'
  iconRight
  //iconType='material'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checkedColor='black'
  checked={this.state.daytripChecked}
  onPress={()=> { this.setState({ daytripChecked: !this.state.daytripChecked }); this.props.daytripPress()}}
/>
 </View>


        <View style={{padding:100}}/>
        </ScrollView>
        </View>
      );

    };
};