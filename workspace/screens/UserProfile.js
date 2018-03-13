import React, { Component } from 'react';
import { View, ScrollView, Platform, ListView, Linking, Image, Text, KeyboardAvoidingView, ImageBackground, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Card, Icon } from 'react-native-elements'
import { Container } from '../components/Container';
import { GeneralTextInput } from '../components/TextInput';
import { ButtonText } from '../components/Button';
import { Errors } from '../components/Errors';
import styles from '../screens/styles';
import { UserProfileContainer } from '../components/Container';
import { connectAlert } from '../components/Alert';

import { changeLoginEmailValue, changeLoginPasswordValue,
        pressLoginSubmit, checkInitialLogin,
         cleanLoginErrorLog } from '../actions/Login';

const headerImage = require('../assets/images/LoginCover.jpg');
const profilePic = require('../components/Container/profilePic.png');
const tour1 = require('../assets/images/tour1.jpeg');
const tour2 = require('../assets/images/tour2.jpeg');

class UserProfile extends Component {
//export default class UserProfile extends Component {

    renderHeader = () => {
   /* const {
      avatar,
      avatarBackground,
      name,
      address: { city, country },
    } = this.props*/

    return (

      <View style={styles.headerContainer}>
        <ImageBackground
          style={[ 
            {
              width: 400,
              height: 280,
            },
            styles.headerBackgroundImage]}
          blurRadius={10}
          source={headerImage}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={profilePic}
            />
            <Text style={styles.userNameText}>Roula Sharqawe</Text>
            <View style={styles.userAddressRow}>
              <View>
                <Icon
                  name="place"
                  underlayColor="transparent"
                  iconStyle={styles.placeIcon}
                  //onPress={this.onPressPlace}
                />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                  Seattle, Washington
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }

  renderTel = () => {
    return (
       
            <View style={styles.innerTelContainer}>
            <View style={styles.iconRow}>
      
            <Icon
              name="call"
              underlayColor="transparent"
              iconStyle={styles.telIcon}
              //onPress={() => onPressTel(number)}
            />
       
        </View>
        <View style={styles.telRow}>
          <View style={styles.telNumberColumn}>
            <Text style={styles.telNumberText}> (203) 3580-384 </Text>
        </View>
        </View>

        </View>
        )
    }

  /*  <ListView
      contentContainerStyle={styles.telContainer}
      
      dataSource={this.state}
      renderRow = {() => {
        return (
        <Text> (203) 3580-384 </Text>
       
        )
      }}
    />
  )*/

  renderEmail = () => (

      <View style={styles.innerEmailContainer}>
      <View style={styles.iconRow2}>
        
          <Icon
            name="email"
            underlayColor="transparent"
            iconStyle={styles.emailIcon}
            //onPress={() => onPressEmail()}
          />
     
      </View>
      <View style={styles.emailRow}>
        <View style={styles.emailColumn}>
          <Text style={styles.emailText}>roula.sharqawe@yahoo.com</Text>
        </View>
        </View>
        </View>
  
  )

renderSeparator = () => (
  <View style={styles.container}>
    <View style={styles.separatorOffset} />
    <View style={styles.separator} />
  </View>
)

renderTours = () => ( 

    <View style={styles.sceneContainer}>
    
        <View style={styles.eachTourContainer}>
            <View style={styles.tourList}>
                <View style={styles.postRow}>
                    <Text>TOUR NAME</Text>
                    <Text style={styles.date}>1 week</Text>
                </View>
                <View style={styles.wordRow}>
                    <Text style={styles.wordText}>Tour Description</Text>
                </View>
                
            </View>

        </View>
        <View style={styles.toursContainer}>
            <Image style={styles.postImage} source={tour1} />
        </View>
    </View>

)




  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.profileContainer}>
          <Card containerStyle={styles.cardContainer}>
            {this.renderHeader()}
            {this.renderTel()}
            {this.renderSeparator()}
            {this.renderEmail()}
            {this.renderSeparator()}
            {this.renderTours()}
            {this.renderTours()}
          </Card>
        </View>
      </ScrollView>
    )
  }
}
        



/*const mapStateToProps = (state) => {
    const user = {
        email: state.Login.email,
        password: state.Login.password
    };

    const errors = state.Login.errors;
    const token = state.Login.authentication_token;
    const email = state.Login.email

    return {
        user,
        errors,
        token,
        email
    };
};*/
export default UserProfile;

//export default connect(mapStateToProps)(connectAlert(SignIn));