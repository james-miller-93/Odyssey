import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { TimeDate } from '../components/TimeDate';

export default class Test extends Component {
    render() {
        return (
            <View>
                <TimeDate/>
            </View>
        )
    }
}