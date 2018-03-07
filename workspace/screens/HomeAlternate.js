import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { Marker, Callout} from 'react-native-maps';
import { connect } from 'react-redux';

import { ButtonText } from '../components/Button';
import { Top } from '../components/Container';
import { CalloutContent } from '../components/MapComponents/';
import { connectAlert } from '../components/Alert';

import { changeTourLocationValue } from '../actions/TourList';

import styles from '../components/Map/styles'

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
const TEMP_MARKER_LOCATION3 = {
    latitude: 41.3089,
    longitude: -72.92834,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
};
const TEMP_MARKER_DATA1 = {
    name: TEMP_MARKER_NAME,
    rating: TEMP_MARKER_RATING,
    distance: TEMP_MARKER_DISTANCE,
    location: TEMP_MARKER_LOCATION1,
    ID: "marker1",
    image: require('../assets/images/profile2.png')
};
const TEMP_MARKER_DATA2 = {
    name: TEMP_MARKER_NAME,
    rating: TEMP_MARKER_RATING,
    distance: TEMP_MARKER_DISTANCE,
    location: TEMP_MARKER_LOCATION2,
    ID: "marker2",
    image: require('../assets/images/profile2.png')
};
const TEMP_MARKER_DATA3 = {
    name: TEMP_MARKER_NAME,
    rating: TEMP_MARKER_RATING,
    distance: TEMP_MARKER_DISTANCE,
    location: TEMP_MARKER_LOCATION3,
    ID: "marker3",
    image: require('../assets/images/profile2.png')
};
const TEMP_MARKER_DATA_ARRAY = [TEMP_MARKER_DATA1,TEMP_MARKER_DATA2,TEMP_MARKER_DATA3];


class HomeAlternate extends Component {

    handleRegionChange = (location) => {
        console.log("---------tour array--------")
        console.log(this.props.tourArray)
        this.props.dispatch(changeTourLocationValue(location))
    };
    
    handleMarkerPress1 = () => {
        this.props.navigation.navigate('TourGuide');
    };

    handleMarkerPress2 = () => {
        this.props.navigation.navigate('TourGuide');
    };

    render() {
        return (
            <View style={styles.container}>
            
                <MapView
                style={styles.map}
                initialRegion={TEMP_INITIAL_REGION}
                onRegionChange={this.handleRegionChange}
                >
                
                    {this.props.tourArray.map((data) => {
                    return (
                        <MapView.Marker
                        key={data.id}
                        coordinate={{
                            latitude: data.latitude,
                            longitude: data.longitude,
                            latitudeDelta: 0.00922,
                            longitudeDelta: 0.00421
                        }}
                        onCalloutPress={this.handleMarkerPress1}
                        description={data.title}
                        //image={data.image}
                        //description = title
                        >
                        <MapView.Callout>
                            <CalloutContent
                            markerTitle={data.traveler_id}
                            markerDescription={data.title}
                            />
                        </MapView.Callout>
                        </MapView.Marker>
                    )
                    })}
                </MapView>
            </View>
            
        );
    };
};

const mapStateToProps = (state) => {
    const mapLocation = state.TourList.location;
    const tourArray = state.TourList.result.tours;
    

    return {
        mapLocation,
        tourArray
    };
};

export default connect(mapStateToProps)(HomeAlternate);

        
