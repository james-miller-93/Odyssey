import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Button, ImageBackground, Image, TextInput,ScrollView} from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/Feather'
import { TimeDate, OneDateTime } from '../TimeDate';
import HideableView from 'react-native-hideable-view';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from 'react-native-modal-datetime-picker';

import { connectAlert } from '../../components/Alert';

import styles from './styles';
import { deleteTours, viewTours } from '../../actions/ViewTours';

const profilePic = require('../Container/profilePic.png');
const tour2 = require('../../assets/images/tour2.jpeg');

class ManageToursContainer extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.deleteError && nextProps.deleteError !== this.props.deleteError) {
            this.props.alertWithType('error','Error',nextProps.deleteError);
        } else if(nextProps.deleteResult && nextProps.deleteResult !== this.props.deleteResult) {
            this.props.dispatch(viewTours(this.props.authentication_token,this.props.email))
        }
    }


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
        {this.props.tours.map((data) => {
        return (
        <View
        key={data.id}
        >
        <View style={styles.eachTourContainer}>
          <View style={styles.tourText}>
                    <Text>{data.title}</Text>
                    <TouchableOpacity 
                    
                    style= {styles.editPress}>
                    <Icon3
        			name="edit"
       				style={styles.editIcon} size={21} 
              onPress={()=> {this.props.navigation.navigate('CreateTours');}}/>

       				</TouchableOpacity>
       				<TouchableOpacity style= {styles.deletePress}>
   					<Icon2
        			name="delete"
                       style={styles.deleteIcon} size={25}
                       onPress={() => {
                           this.props.dispatch(deleteTours(this.props.token,this.props.email,data.id))
                       }}
                       />
   					</TouchableOpacity>

                <Text style={styles.date}>{data.duration} hours</Text>

            </View>
                <View style={styles.wordRow}>
                    <Text style={styles.wordText}>{data.description}</Text>
            
     
     	</View>
     	</View>
        <View style={styles.imageContainer}>
            <Image style={styles.postImage} source={tour2} />
        </View>
        </View>
        )})}
            

  
        

    </ScrollView>




   		)
    }
}

const mapStateToProps = (state) => {

    const token = state.ViewTours.authentication_token;
    const email = state.ViewTours.email;

    const tours = state.ViewTours.result.tours;
    const deleteError = state.ViewTours.deleteTourErrors;
    const deleteResult = state.ViewTours.deleteTourResult;

    return {
        token,
        email,
        tours,
        deleteError,
        deleteResult
    }

}

export default connect(mapStateToProps)(connectAlert(ManageToursContainer));
