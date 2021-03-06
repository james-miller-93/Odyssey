import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, ImageBackground, TextInput,ScrollView} from 'react-native';
import {ButtonText} from './index';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { CheckBox } from 'react-native-elements'

import styles from './styles';

const profilePic = require('../Container/profilePic.png');

export default class CreateTourContainer extends Component {


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
    	return (
        <View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.generalSave}
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
              onChangeText={this.props.maxPeople}
              adjustsFontSizeToFit
              />
            </View>
                
            <View style={styles.textInputContainer}>
              <TextInput
              style={[styles.generalTextInput , {width: 240}]}
              defaultValue={this.props.oldLanguages}
              placeholderTextColor={'#FFFFFF'}
              onChangeText={this.props.languages}
              adjustsFontSizeToFit
              />
            </View>
         
            <View style={styles.textInputContainer}>
                <TextInput
                  style={[styles.generalTextInput , {width: 150}]}
                  defaultValue={this.props.oldDuration}
                  placeholderTextColor={'#FFFFFF'}
                  onChangeText={this.props.duration}
                  adjustsFontSizeToFit
                  />
                </View>

                <TextInput
                style={[styles.generalTextInput , {width: 90, fontSize: 15}]}
                defaultValue={this.props.oldPrice}
                placeholderTextColor={'#C0C0C0'}
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
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checkedColor='black'
              checked={this.props.nightLifeChecked}
              onPress={()=> { this.setState({ nightLifeChecked: !this.state.nightLifeChecked }); this.props.nightLifePress()}}
            />
            <CheckBox
              center
              title='Food'
              iconRight
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checkedColor='black'
              checked={this.props.foodChecked}
              onPress={()=> { this.setState({ foodChecked: !this.state.foodChecked }); this.props.foodPress()}}
            />
            	
             </View>
             <View style={{flexDirection: 'row'}}>
              <CheckBox
              center
              title='Museums'
              iconRight
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checkedColor='black'
              checked={this.props.museumsChecked}
              onPress={()=> { this.setState({ museumsChecked: !this.state.museumsChecked }); this.props.museumsPress()}}
            />
            <CheckBox
              center
              title='Outdoors'
              iconRight
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checkedColor='black'
              checked={this.props.outdoorsChecked}
              onPress={()=> { this.setState({ outdoorsChecked: !this.state.outdoorsChecked }); this.props.outdoorsPress()}}
            />


            </View>
            <View style={{flexDirection: 'row'}}>
            <CheckBox
              center
              title='Landmarks'
              iconRight
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checkedColor='black'
              checked={this.props.landmarksChecked}
              onPress={()=> { this.setState({ landmarksChecked: !this.state.landmarksChecked }); this.props.landmarksPress()}}
              /> 
                 <CheckBox
              center
              title='Daytrip'
              iconRight
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checkedColor='black'
              checked={this.props.daytripChecked}
              onPress={()=> { this.setState({ daytripChecked: !this.state.daytripChecked }); this.props.daytripPress()}}
            />
             </View>


            <View style={{padding:100}}/>
          </ScrollView>
        </View>
      );
    };
};