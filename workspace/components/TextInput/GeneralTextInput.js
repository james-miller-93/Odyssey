import React, { Component } from 'react';
import { View, TextInput } from 'react-native';


import styles from './styles';

export default class GeneralTextInput extends Component {

    render() {
        return (
            <View style={styles.generalContainer}>
          
            <TextInput
            style={styles.generalText}
            placeholder={this.props.displayText}
            placeholderTextColor={'#000'}
            secureTextEntry={this.props.secure}
            onChangeText={this.props.handleTextChange}
            adjustsFontSizeToFit
            />
           
            </View>
        )
    }
}

