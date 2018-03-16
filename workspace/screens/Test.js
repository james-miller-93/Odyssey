import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { OneDateTime } from '../components/TimeDate';

export default class Test extends Component {
    render() {
        return (
            <View>
                <OneDateTime/>
            </View>
        )
    }
}