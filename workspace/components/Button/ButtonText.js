import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default class ButtonText extends Component {

    render() {
        return (
            <View style={styles.generalContainer}>
            <TouchableOpacity
            style={styles.generalButton}
            onPress={this.props.handlePress}
            >
            <Text
            style={styles.buttonText}
            >
                {this.props.displayText}
                </Text>
            </TouchableOpacity>
            </View>
        )
    }
}