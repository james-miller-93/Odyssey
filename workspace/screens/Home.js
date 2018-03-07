import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { ButtonText } from '../components/Button';
import { Top } from '../components/Container';
import { Map } from '../components/Map';

//TEMP DATA
const TEMP_INITIAL_REGION = {
    latitude: 41.3119,
    longitude: -72.92834,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
};
const TEMP_MARKER_NAME = "Michal Dimick";
const TEMP_MARKER_RATING = "5.0";
const TEMP_MARKER_DISTANCE = "0.7 miles";
const TEMP_MARKER_LOCATION1 = {
    latitude: 41.3129,
    longitude: -72.92834,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
};
const TEMP_MARKER_LOCATION2 = {
    latitude: 41.3109,
    longitude: -72.92834,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
};


export default class Home extends Component {

    handleMarkerPress1 = () => {
        this.props.navigation.navigate('TourGuide');
    };

    handleMarkerPress2 = () => {
        this.props.navigation.navigate('TourGuide');
    };

    render() {
        return (
            
            <Map
            initialMapRegion={{
                latitude: 41.3119,
                longitude: -72.92834,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
            }}
            markerCoordinate1={{
                latitude: 41.3129,
                longitude: -72.92834,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
            }}
            markerTitle1={'Michael Dimick'}
            markerRating1={'5.0'}
            markerDistance1={'0.7 miles'}
            pressHandler1={this.handleMarkerPress1}
            markerCoordinate2={{
                latitude: 41.3109,
                longitude: -72.92834,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
            }}
            markerTitle2={'Michael Dimick'}
            markerRating2={'5.0'}
            markerDistance2={'0.7 miles'}
            pressHandler2={this.handleMarkerPress2}
            />
        );
    };
};