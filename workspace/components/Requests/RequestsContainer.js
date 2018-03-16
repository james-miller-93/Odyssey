import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, Image} from 'react-native';
import {ButtonText} from './index';


import styles from './styles';

const profilePic = require('../Container/profilePic.png');

export default class RequestsContainer extends Component {


    render() {
      const { navigate } = this.props.navigation;
    	return (

    
    		<View style={styles.notificationContainer}>
            <Image
              style={styles.userImage}
              source={profilePic}
            />
            <View style={styles.textContainer}>
              <View style={{flexDirection : 'row', top: 25, marginLeft: 2}}>
              <TouchableOpacity underlayColor="#FFF" onPress= {() => {navigate('UserProfile')}}>
              <Text style={styles.travelerName} > {this.props.travelerName} </Text>
              </TouchableOpacity>
              <Text style={styles.message}>has sent you a tour request </Text>

              </View>
              <View style={{flexDirection: 'row', top: 30}}>
                    <View style= {styles.button}>
                         
                          <TouchableOpacity
                          style={styles.generalButton}
                          //onPress={this.props.handlePress}

                          >

                          <View >
                              <Text style={styles.buttonText}> Accept </Text>
                          </View>
                          
                          </TouchableOpacity>
                      </View>
                       <View style= {styles.button}>
                         
                          <TouchableOpacity
                          style={styles.generalButton}
                          //onPress={this.props.handlePress}

                          >

                          <View >
                              <Text style={styles.buttonText}> Decline </Text>
                          </View>
                          
                          </TouchableOpacity>
                      </View>

            </View>
            </View>
        </View>
         
    )
   }
}