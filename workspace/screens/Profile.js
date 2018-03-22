import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import EStyleSheet from 'react-native-extended-stylesheet';

import { ProfileView } from '../components/ProfileListView';
import { connectAlert } from '../components/Alert';


import TEMP_MARKER_DATA_ARRAY from '../screens/HomeAlternate';



class Profile extends Component {

    handleProfilePress = () => {
        this.props.navigation.navigate('TourGuide');
    };

    render() {
        return (

            <ScrollView>

                {this.props.tourArray.map((data) => {
                    return (
                        <ProfileView
                        key={data.id}
                        handlePress={this.handleProfilePress}
                        profileName={data.title}
                        profileImage={require('../assets/images/blankAvatar.png')}
                        displayText={"View Profile"}
                        />
                    )
                })}


                


            </ScrollView>

        );
    };
};

const mapStateToProps = (state) => {
    const tourArray = state.TourList.result.tours;

    return {
        tourArray
    };
};

export default connect(mapStateToProps)(Profile);