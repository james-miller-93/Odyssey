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
                       
                        />
                        <View
                        style={styles.stickerContainer}
                        >
                            <Image
                            style={styles.stickerImage}
                            source={this.props.stickerImage1}
                           
                            />
                            <Image
                            style={styles.stickerImage}
                            source={this.props.stickerImage2}
                            
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