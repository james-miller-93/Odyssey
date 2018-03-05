import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import styles from './styles';

export default class ButtonText extends Component {

    render() {
        return (
            <View style={EStyleSheet.flatten([styles.generalContainer,this.props.buttonColor])}>
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