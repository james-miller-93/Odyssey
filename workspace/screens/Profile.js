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

                {TEMP_MARKER_DATA_ARRAY.MAP((data) => {
                    return (
                        <ProfileView
                        handlePress={this.handleProfilePress}
                        profileName={data.name}
                        profileImage={data.image}
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
    const result = state.TourList.result;

    return {
        result
    };
};

export default connect(mapStateToProps)(Profile);