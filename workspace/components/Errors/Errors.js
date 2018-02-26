import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

export default class Errors extends Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <View style={styles.container}>
                <Text 
                    style={styles.text}
                >
                {this.props.error}
            </Text>
            </View>
        );
    }
}
