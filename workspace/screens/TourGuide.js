import React, { Component } from 'react';
import { ScrollView, View, Text, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

import HideableView from 'react-native-hideable-view';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class TourGuide extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bioVisible: false,
            tourVisible: false,
        };
    };

    handleBioPress = () => {
        this.setState({
            bioVisible: !this.state.bioVisible
        });
    };

    handleTourPress = () => {
        this.setState({
            tourVisible: !this.state.tourVisible
        });
    };


    render() {
        return (
        <ScrollView
        >
            <View
            style={{
                height: 285,
                width: '100%',
                backgroundColor: '#E59400',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
            <Image
            source={require('../assets/images/profile2.png')}
            
            />
            <Text
            style={{
                fontSize: 28,
                color: '#FFFFFF',
                top: 5
            }}
            >
                Michael Dimick
            </Text>
            <View
            style={{
                top: 10,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center'
            }}
            >
            <Image
            source={require('../assets/images/4star.png')}
            style={{
                height: '80%',
                width: '20%',
                top: 2
            }}
            />
            <Text
            style={{
                left: 10,
                fontSize: 14,
                color: '#FFFFFF',
            }}
            >
                4.0 Stars
            </Text>
            </View>
            <View
            style={{
                flexDirection:'row',
                alignItems: 'center',
                justifyContent: 'center',
                top: 20
            }}
            >
            <Image
            style={{
                height: 40,
                width: 40,
            }}
            source={require('../assets/images/stickers/carSticker.png')}
            />
            <Image
            style={{
                height: 40,
                width: 40
            }}
            source={require('../assets/images/stickers/mapSticker.png')}
            />
            <Image
            style={{
                height: 40,
                width: 40
            }}
            source={require('../assets/images/stickers/foodSticker.png')}
            />
            </View>

            </View>


            



            <View
            style={{
                width: '100%',
                height: 80,
                backgroundColor: '#d3d3d3',
                alignItems: 'center',
                justifyContent: 'center',
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
                justifyContent: 'center'
            }}
            onPress={this.handleBioPress}
            >
                <Text
                style={{
                    fontSize: 24,
                    textAlign: 'center',
                    justifyContent: 'center'
                }}
                >
                    View Bio
                </Text>
            </TouchableOpacity>
            </View>
            <HideableView 
            visible={this.state.bioVisible}
            removeWhenHidden={true}
            style={{
                height: 250,
                width: '100%',
                justifyContent: 'center',
                borderRightWidth: EStyleSheet.hairlineWidth,
                borderLeftWidth: EStyleSheet.hairlineWidth,
                borderTopWidth: EStyleSheet.hairlineWidth,
                borderBottomWidth: EStyleSheet.hairlineWidth,
            }}
            >
            <View
            style={{
                height: 50,
                width: '100%',
                flexDirection: 'row',
                
            }}
            >
                <Image
            style={{
                height: 40,
                width: 40,
            }}
            source={require('../assets/images/stickers/carSticker.png')}
            />
                <Text
                style={{
                    fontSize: 22
                }}
                >
                    Has a car
                </Text>
            </View>
            <View
            style={{
                height: 50,
                width: '100%',
                flexDirection: 'row',
                
            }}
            >
                <Image
            style={{
                height: 40,
                width: 40,
            }}
            source={require('../assets/images/stickers/mapSticker.png')}
            />
                <Text
                style={{
                    fontSize: 22
                }}
                >
                    Expert knowledge of area
                </Text>
            </View>
            <View
            style={{
                height: 50,
                width: '100%',
                flexDirection: 'row',
                
            }}
            >
                <Image
            style={{
                height: 40,
                width: 40,
            }}
            source={require('../assets/images/stickers/foodSticker.png')}
            />
                <Text
                style={{
                    fontSize: 22
                }}
                >
                    Foodie
                </Text>
            </View>
            <Text>
                I love giving tours. I have lived in the area my entire life, and I am an expert of Yale University and New Haven. I love meeting new people and showing them around!
            </Text>
            </HideableView>


            <View
            style={{
                width: '100%',
                height: 80,
                backgroundColor: '#d3d3d3',
                alignItems: 'center',
                justifyContent: 'center',
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
                justifyContent: 'center'
            }}
            onPress={this.handleTourPress}
            >
                <Text
                style={{
                    fontSize: 24,
                    textAlign: 'center',
                    justifyContent: 'center'
                }}
                >
                    View/Book Tour
                </Text>
            </TouchableOpacity>
            </View>
            <HideableView 
            visible={this.state.tourVisible}
            removeWhenHidden={true}
            style={{
                height: 450,
                width: '100%',
                justifyContent: 'center',
                borderRightWidth: EStyleSheet.hairlineWidth,
                borderLeftWidth: EStyleSheet.hairlineWidth,
                borderTopWidth: EStyleSheet.hairlineWidth,
                borderBottomWidth: EStyleSheet.hairlineWidth,
            }}
            >
            
            <View
            style={{
                height: 100,
                width: '100%',
                flexDirection: 'row',
            }}
            >
            <View
            style={{
                height: 70,
                width: 110,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
            <Image 
            source={require('../assets/images/yaleTours/groveStreetCemetery.jpg')}
            style={{
                height: '100%',
                width: '100%',
                top: 15,
                left: 5
            }}
            />
            </View>
            <View
            style={{
                height: '100%',
                width: '62%',
                left: 10,
                top: 5
                
            }}
            >
                <Text
                style={{
                    fontSize: 16,
                    textAlign: 'left'
                }}
                >
                    1.) Grove Street Cemetery
                </Text>
                <Text
                style={{
                    fontSize: 10
                }}
                >
                   Organized in 1796, it was the first private, nonprofit cemetery in the world. It was one of the earliest burial grounds to have  have a planned layout, with plots permanently owned by individual families. 
                </Text>
            </View>
            </View>


            <View
            style={{
                height: 100,
                width: '100%',
                flexDirection: 'row',
            }}
            >
            <View
            style={{
                height: 70,
                width: 110,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
            <Image 
            source={require('../assets/images/yaleTours/beineckeLibrary.jpg')}
            style={{
                height: '100%',
                width: '100%',
                top: 15,
                left: 5
            }}
            />
            </View>
            <View
            style={{
                height: '100%',
                width: '62%',
                left: 10,
                top: 5
                
            }}
            >
                <Text
                style={{
                    fontSize: 16,
                    textAlign: 'left'
                }}
                >
                    2.) Beinecke Library
                </Text>
                <Text
                style={{
                    fontSize: 10
                }}
                >
                   Beinecke Library is the rare book library and literary archive for Yale University. Constructed in 1963, it is one of the largest buildings in the world entirely dedicated to rare books and manuscripts. 
                </Text>
            </View>
            </View>


            <View
            style={{
                height: 100,
                width: '100%',
                flexDirection: 'row',
            }}
            >
            <View
            style={{
                height: 70,
                width: 110,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
            <Image 
            source={require('../assets/images/yaleTours/highStreetArch.jpg')}
            style={{
                height: '100%',
                width: '100%',
                top: 15,
                left: 5
            }}
            />
            </View>
            <View
            style={{
                height: '100%',
                width: '62%',
                left: 10,
                top: 5
                
            }}
            >
                <Text
                style={{
                    fontSize: 16,
                    textAlign: 'left'
                }}
                >
                    3.) High Street Arch
                </Text>
                <Text
                style={{
                    fontSize: 10
                }}
                >
                   This beautiful building separates the bottom of Yale's campus with downtown New Haven. The High Street Arch is one of the most elegant pieces of architecture on campus. 
                </Text>
            </View>
            </View>


            <View
            style={{
                height: 100,
                width: '100%',
                flexDirection: 'row',
            }}
            >
            <View
            style={{
                height: 70,
                width: 110,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
            <Image 
            source={require('../assets/images/yaleTours/newHavenGreen.jpg')}
            style={{
                height: '100%',
                width: '100%',
                top: 15,
                left: 5
            }}
            />
            </View>
            <View
            style={{
                height: '100%',
                width: '62%',
                left: 10,
                top: 5
                
            }}
            >
                <Text
                style={{
                    fontSize: 16,
                    textAlign: 'left'
                }}
                >
                    4.) New Haven Green
                </Text>
                <Text
                style={{
                    fontSize: 10
                }}
                >
                   Completed in 1638, the Puritans were said to have designed the green large enough to hold the number of people who they believed would be spared in the Second Coming of Christ: 144,000. 
                </Text>
            </View>
            </View>


            <View
            style={{
                height: 50,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
            <TouchableOpacity
            style={{
                height: 40,
                width: '70%',
                borderRadius: 20,
                backgroundColor: '#E59400',

            }}
            >
                <Text
                style={{
                    fontSize: 24,
                    color: '#FFFFFF',
                    textAlign: 'center',
                    top: 5
                }}
                >
                    Book tour?
                </Text>
            </TouchableOpacity>
            </View>


            </HideableView>



            <View
            style={{
                width: '100%',
                height: 80,
                backgroundColor: '#d3d3d3',
                alignItems: 'center',
                justifyContent: 'center',
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
                bottom: 5
            }}
            
            >
                <Text
                style={{
                    fontSize: 24,
                    textAlign: 'center',
                    justifyContent: 'center'
                }}
                >
                    View Reviews
                </Text>
            </TouchableOpacity>
            </View>

            <View
            style={{
                width: '100%',
                height: 80,
                backgroundColor: '#d3d3d3',
                alignItems: 'center',
                justifyContent: 'center',
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
                bottom: 5
            }}
            
            >
                <Text
                style={{
                    fontSize: 24,
                    textAlign: 'center',
                    justifyContent: 'center'
                }}
                >
                    Contact Michael
                </Text>
            </TouchableOpacity>
            </View>


            

        </ScrollView>
        );
    };
};