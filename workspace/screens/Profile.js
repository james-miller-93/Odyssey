import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import { ProfileView } from '../components/ProfileListView';

export default class Profile extends Component {

    handleProfilePress = () => {
        this.props.navigation.navigate('TourGuide');
    };

    render() {
        return (

            <ScrollView>

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