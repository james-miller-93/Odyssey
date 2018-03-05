import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

import SearchBar from '../TextInput';
import CustomCallout from '../MapComponents/CustomCallout';
import CalloutContent from '../MapComponents/CalloutContent';

import styles from './styles';

export default class Map extends Component {
    constructor(props) {
        super(props);
    };

    /*handlePress = (marker) => {
        this[marker].showCallout();
    };*/

    render() {
        return (
            <View style={styles.container}>
            
            <MapView
            style={styles.map}
            initialRegion={this.props.initialMapRegion}
            >
            
            <MapView.Marker
            //onPress={this.marker.showCallout}
            coordinate={this.props.markerCoordinate1}
            title={this.props.markerTitle1}
            description={this.props.markerDescription1}
            onCalloutPress={() => this.props.pressHandler1('marker1')}
            image={require('../../assets/images/profile2.png')}
            
            >
            <MapView.Callout >
                <CalloutContent
                markerTitle={"Michael Dimick"}/>
            {/*<CustomCallout
            markerTitle={this.props.markerTitle1}
            markerRating={this.props.markerRating1}
            markerRatingImg={this.props.markerRatingImg1}
            markerDistance={this.props.markerDistance1}
            />*/}
            </MapView.Callout>
            </MapView.Marker>
            <MapView.Marker
            
            coordinate={this.props.markerCoordinate2}
            title={this.props.markerTitle2}
            description={this.props.markerDescription2}
            onCalloutPress={() => this.props.pressHandler2('marker2')}
            image={require('../../assets/images/profile2.png')}
            
            >
            <MapView.Callout>
            <CustomCallout
            markerTitle={this.props.markerTitle2}
            markerRating={this.props.markerRating2}
            markerRatingImg={this.props.markerRatingImg2}
            markerDistance={this.props.markerDistance2}
            />
            </MapView.Callout>
            </MapView.Marker>
            </MapView>
            {this.props.child1}
            {this.props.child2}

            </View>
        );
    };
};
