import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const BigLogo = () => (
    <View style = {styles.container}>
        <Image 
        source={require('./odyssey.png')}
        style={styles.logo}
        >
        
        </Image>
    </View>
);

export default BigLogo;