import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

export default class Profile extends Component {

    handleProfilePress = () => {
        this.props.navigation.navigate('TourGuide');
    };

    render() {
        return (

            <ScrollView>

            <View
            style={{
                height: 100,
                width: '100%',
                flexDirection: 'row',
                borderRightWidth: EStyleSheet.hairlineWidth,
                borderLeftWidth: EStyleSheet.hairlineWidth,
                borderTopWidth: EStyleSheet.hairlineWidth,
                borderBottomWidth: EStyleSheet.hairlineWidth,
            }}
            >
            <TouchableOpacity
            style={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row'
            }}
            onPress={this.handleProfilePress}
            >
            <View
            style={{
                height: 100,
                width: 125,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#E59400'
            }}
            >
            <Image 
            source={require('../assets/images/profile2.png')}
            style={{
                height: '100%',
                width: '100%',
                 
            }}
            />
            </View>
            <View
            style={{
                height: '100%',
                width: '62%',
                alignItems: 'center',
                justifyContent: 'center'
                
            }}
            >
                <Text
                style={{
                    fontSize: 24,
                    textAlign: 'center'
                }}
                >
                    Robert Wilson
                </Text>
                <Image
                style={{
                    height: 20,
                    width: 100,
                    
                }}
                source={require('../assets/images/5star.png')}
                />
                    <View
            style={{
                flexDirection:'row',
                alignItems: 'center',
                justifyContent: 'center',
                
            }}
            >
            <Image
            style={{
                height: 30,
                width: 30,
            }}
            source={require('../assets/images/stickers/carSticker.png')}
            />
            <Image
            style={{
                height: 30,
                width: 30
            }}
            source={require('../assets/images/stickers/mapSticker.png')}
            />
            
            </View>
                <Text
                style={{
                    fontSize: 10,
                    textAlign: 'center',
                    
                }}
                >
                View Profile   
                </Text>
                
            </View>
            </TouchableOpacity>
            </View>




                <View
                style={{
                    height: 100,
                    width: '100%',
                    flexDirection: 'row',
                    borderRightWidth: EStyleSheet.hairlineWidth,
                    borderLeftWidth: EStyleSheet.hairlineWidth,
                    borderTopWidth: EStyleSheet.hairlineWidth,
                    borderBottomWidth: EStyleSheet.hairlineWidth,
                }}
                >
            <TouchableOpacity
            style={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row'
            }}
            onPress={this.handleProfilePress}
            >
            <View
            style={{
                height: 100,
                width: 125,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#E59400'
            }}
            >
            <Image 
            source={require('../assets/images/profile2.png')}
            style={{
                height: '100%',
                width: '100%',
                 
            }}
            />
            </View>
            <View
            style={{
                height: '100%',
                width: '62%',
                alignItems: 'center',
                justifyContent: 'center'
                
            }}
            >
                <Text
                style={{
                    fontSize: 24,
                    textAlign: 'center'
                }}
                >
                    Michael Dimick
                </Text>
                <Image
                style={{
                    height: 20,
                    width: 100,
                    
                }}
                source={require('../assets/images/4star.png')}
                />
                <View
            style={{
                flexDirection:'row',
                alignItems: 'center',
                justifyContent: 'center',
                
            }}
            >
            <Image
            style={{
                height: 30,
                width: 30,
            }}
            source={require('../assets/images/stickers/carSticker.png')}
            />
            <Image
            style={{
                height: 30,
                width: 30
            }}
            source={require('../assets/images/stickers/mapSticker.png')}
            />
            <Image
            style={{
                height: 30,
                width: 30
            }}
            source={require('../assets/images/stickers/foodSticker.png')}
            />
            </View>
                <Text
                style={{
                    fontSize: 10,
                    textAlign: 'center',
                    
                }}
                >
                View Profile   
                </Text>
                
            </View>
            </TouchableOpacity>
            </View>

            </ScrollView>

        );
    };
};