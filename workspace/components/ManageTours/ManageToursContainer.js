import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Button, ImageBackground, Image, TextInput,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/Feather'
import { TimeDate, OneDateTime } from '../TimeDate';
import HideableView from 'react-native-hideable-view';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from 'react-native-modal-datetime-picker';

import styles from './styles';

const profilePic = require('../Container/profilePic.png');
const tour2 = require('../../assets/images/tour2.jpeg');

export default class ManageToursContainer extends Component {

    render() {
    	return (

   	<ScrollView style={styles.generalContainer}>

   	<View>
   	<TouchableOpacity style={styles.plusPress}>
   	<Icon3
        name="plus"
        style={styles.plusIcon} size={65} 
        onPress={()=> {this.props.navigation.navigate('CreateTours');}} />
   	</TouchableOpacity>
    </View>
    
        <View style={styles.eachTourContainer}>
          <View style={styles.tourText}>
                    <Text>TOUR NAME</Text>
                    <TouchableOpacity style= {styles.editPress}>
                    <Icon3
        			name="edit"
       				style={styles.editIcon} size={21} 
              onPress={()=> {this.props.navigation.navigate('CreateTours');}}/>

       				</TouchableOpacity>
       				<TouchableOpacity style= {styles.deletePress}>
   					<Icon2
        			name="delete"
       				style={styles.deleteIcon} size={25} />
   					</TouchableOpacity>

                <Text style={styles.date}>10 hours</Text>

            </View>
                <View style={styles.wordRow}>
                    <Text style={styles.wordText}>Tour Description</Text>
            
     
     	</View>
     	</View>
        <View style={styles.imageContainer}>
            <Image style={styles.postImage} source={tour2} />
        </View>
 	  	 
            

  <View style={styles.eachTourContainer}>
          <View style={styles.tourText}>
                    <Text>TOUR NAME</Text>
                    <TouchableOpacity style= {styles.editPress}>
                    <Icon3
        			name="edit"
       				style={styles.editIcon} size={21} 
              onPress={()=> {this.props.navigation.navigate('CreateTours');}}/>

       				</TouchableOpacity>
       				<TouchableOpacity style= {styles.deletePress}>
   					<Icon2
        			name="delete"
       				style={styles.deleteIcon} size={25} />
   					</TouchableOpacity>

                <Text style={styles.date}>10 hours</Text>

            </View>
                <View style={styles.wordRow}>
                    <Text style={styles.wordText}>Tour Description</Text>
            
     
     	</View>
     	</View>
        <View style={styles.imageContainer}>
            <Image style={styles.postImage} source={tour2} />
        </View>
      
        

    </ScrollView>




   		)
    }
}
