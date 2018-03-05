import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

export default class CalloutContent extends Component {

    render() {
        return (
            <View>
                <Text>
                    {this.props.markerTitle}
                </Text>
                <Text>
                    THIS IS A CALLOUT
                </Text>
            </View>
        )
    }
}