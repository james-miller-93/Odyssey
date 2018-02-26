import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, Image } from 'react-native';
import { BigLogo } from '../Logo';

import styles from './styles';

export default class ContainerLogo extends Component {

    render() {
        return (
            <View style={styles.container}>
        <View style={{
            height: '20%',
            width: '80%'
        }}
        >
        <Image
        style={styles.logo}
        source={require('./odyssey.png')}
        />
        </View>  

        {this.props.children}
    </View>
        )
    }
}


