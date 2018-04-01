import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

export default class CustomCallout extends Component {

    render() {
        return (

            <View>
                <View>
                    <Text
                    style={{
                        fontSize: 20
                    }}>
                    {this.props.marketTitle}
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>
                    {this.props.marketRating}
                    </Text>
                    <Image source={this.props.markerRatingImg}
                    />
                </View>
                <View>
                    <Text>
                    {this.props.marketDistance}
                    </Text>
                </View>
            </View>
        )
    }
}