import React, { Component } from 'react';
import { View, TextInput, } from 'react-native';

import styles from './styles';

export default class GeneralTextInput extends Component {

    render() {
        return (
            <View style={styles.generalContainer}>
            <View style={{
                height: '100%',
                width: '90%',
                justifyContent: 'center',
            }}>
            <TextInput
            style={styles.generalText}
            placeholder={this.props.displayText}
            placeholderTextColor={'#808080'}
            secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
            </View>
            </View>
        )
    }
}

