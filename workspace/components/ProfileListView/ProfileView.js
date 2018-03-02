import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class ProfileView extends Component {

    render() {
        return (
            <View
            style={styles.barContainer}
            >
                <TouchableOpacity
                style={styles.barTouchable}
                onPress={this.props.handlePress}
                >
                    <View
                    style={styles.imageContainer}
                    >
                        <Image 
                        source={this.props.profileImage}
                        //source={require('../assets/images/profile2.png')}
                        style={styles.barImage}
                        />
                    </View>
                    <View
                    style={styles.infoContainer}
                    >
                        <Text
                        style={styles.textName}
                        >
                        {this.props.profileName}
                        
                        </Text>
                        <Image
                        style={styles.ratingImage}
                        source={this.props.ratingImage}
                        //source={require('../assets/images/5star.png')}
                        />
                        <View
                        style={styles.stickerContainer}
                        >
                            <Image
                            style={styles.stickerImage}
                            source={this.props.stickerImage1}
                            //source={require('../assets/images/stickers/carSticker.png')}
                            />
                            <Image
                            style={styles.stickerImage}
                            source={this.props.stickerImage2}
                            //source={require('../assets/images/stickers/mapSticker.png')}
                            />
                        </View>
                        <Text
                        style={styles.displayText}
                        >
                        {this.props.displayText}
                               
                        </Text>
                
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}