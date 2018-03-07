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
                        //profileImage={data.image}
                        displayText={"View Profile"}
                        />
                    )
                })}


                <ProfileView
                handlePress={this.handleProfilePress}
                profileImage={require('../assets/images/profile2.png')}
                profileName={"Robert Wilson"}
                ratingImage={require('../assets/images/5star.png')}
                stickerImage1={require('../assets/images/stickers/carSticker.png')}
                stickerImage2={require('../assets/images/stickers/mapSticker.png')}
                displayText={"View Profile"}
                />

                <ProfileView
                handlePress={this.handleProfilePress}
                profileImage={require('../assets/images/profile2.png')}
                profileName={"Robert Wilson"}
                ratingImage={require('../assets/images/5star.png')}
                stickerImage1={require('../assets/images/stickers/carSticker.png')}
                stickerImage2={require('../assets/images/stickers/mapSticker.png')}
                displayText={"View Profile"}
                />    

                <ProfileView
                handlePress={this.handleProfilePress}
                profileImage={require('../assets/images/profile2.png')}
                profileName={"Robert Wilson"}
                ratingImage={require('../assets/images/5star.png')}
                stickerImage1={require('../assets/images/stickers/carSticker.png')}
                stickerImage2={require('../assets/images/stickers/mapSticker.png')}
                displayText={"View Profile"}
                />

                <ProfileView
                handlePress={this.handleProfilePress}
                profileImage={require('../assets/images/profile2.png')}
                profileName={"Robert Wilson"}
                ratingImage={require('../assets/images/5star.png')}
                stickerImage1={require('../assets/images/stickers/carSticker.png')}
                stickerImage2={require('../assets/images/stickers/mapSticker.png')}
                displayText={"View Profile"}
                />


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