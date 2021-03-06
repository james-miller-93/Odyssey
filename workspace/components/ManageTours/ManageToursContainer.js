import React, { Component } from 'react';
import { Alert, View, Text, TouchableOpacity, TouchableHighlight, Button, ImageBackground, Image, TextInput,ScrollView} from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/Feather'
import { TimeDate, OneDateTime } from '../TimeDate';
import HideableView from 'react-native-hideable-view';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {editTours, tourMode} from '../../actions/CreateTours';

import { connectAlert } from '../../components/Alert';

import styles from './styles';
import { deleteTours, viewTours } from '../../actions/ViewTours';

const profilePic = require('../Container/profilePic.png');
const tour2 = require('../../assets/images/tour2.jpeg');

class ManageToursContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tourID: ''
    }
  }


  deleteAlert = (tourID) => {

    return (
      Alert.alert(
        'Are you sure you want to delete this tour?',
        'You cannot undo this action.',
        [
        {text: 'Delete', onPress: () => this.props.dispatch(deleteTours(this.props.token,this.props.email,tourID)) },
        {text: 'Cancel', onPress: () => console.log('Cancel pressed'), style: 'cancel'},

        ],
        { cancelable: false }
        )

      )
  }

  renderCreateInfo = () => {

    this.props.dispatch(tourMode('create'))

    const tourInfo = {

      city: '',
      title: '',
      duration: '',
      description: '',
      tourID: '',
      max_persons: '',
      is_daytrip: false,
      is_foodie: false,
      is_landmarks: false,
      is_museums: false,
      is_nightlife: false,
      is_outdoors: false, 
      price: '',
    }

    this.props.dispatch(editTours(tourInfo))

  }

  renderOldInfo = (data) => {

    this.props.dispatch(tourMode('edit'))

    console.log("here");

    const tourInfo = {

      city: data.city,
      title: data.title,
      duration: data.duration,
      description: data.description,
      tourID: data.id,
      max_persons: data.max_persons,
      is_daytrip: data.is_daytrip,
      is_foodie: data.is_foodie,
      is_landmarks: data.is_landmarks,
      is_museums: data.is_museums,
      is_nightlife: data.is_nightlife,
      is_outdoors: data.is_outdoors, 
      price: data.price,
    }   

    this.props.dispatch(editTours(tourInfo))

  }

  componentWillReceiveProps(nextProps) {
              //if errors alert
              if(nextProps.tourInfo && nextProps.tourInfo !== this.props.tourInfo) {
                this.props.navigation.navigate('CreateTours');
              //if success
            } else if (nextProps.deleteError && nextProps.deleteError !== this.props.deleteError) {
              this.props.alertWithType('error','Error',nextProps.deleteError);
            } else if(nextProps.deleteResult && nextProps.deleteResult !== this.props.deleteResult) {
              this.props.dispatch(viewTours(this.props.authentication_token,this.props.email))
            }

            
          }         



          render() {
           return (

            <View style={styles.container}>
            <View style={{width: 60, height: 50, top: 25, left:10, paddingBottom: 40,  position: 'absolute'}}>

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('MyGuideProfile')}} underlayColor="#FFF">
            <Icon3 name="arrow-left" style={{left: 0, position: 'absolute'}} size={27} />
            </TouchableOpacity>
            </View>

            <ScrollView style={styles.generalContainer}>

            <View>
            <TouchableOpacity style={styles.plusPress}>
            <Icon3
            name="plus"
            style={styles.plusIcon} size={65} 
            onPress={this.renderCreateInfo}
            />

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
                onPress={()=> {this.renderOldInfo(data)}} />



                </TouchableOpacity>
                <TouchableOpacity style= {styles.deletePress} onPress = {() => this.deleteAlert(data.id)} >
                <Icon2
                name="delete"
                style={styles.deleteIcon} size={25}
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
            </View>

            )
         }
       }

       const mapStateToProps = (state) => {

        const token = state.ViewTours.authentication_token;

        const tours = state.ViewTours.result.tours;
        const deleteError = state.ViewTours.deleteTourErrors;
        const deleteResult = state.ViewTours.deleteTourResult;

        const authentication_token = state.ViewTours.authentication_token;
        const email = state.ViewTours.email;
        const tourInfo = state.CreateTours.tourInfo;

        return {
          token,
          tours,
          deleteError,
          deleteResult,
          tours,
          email,
          authentication_token,
          tourInfo,
        }

      }

      export default connect(mapStateToProps)(connectAlert(ManageToursContainer));
