import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { SearchBar } from '../TextInput';
import { Bar } from '../Container';
import { BarButton } from '../Button';

import styles from './styles';

export default class Map extends Component {
    constructor(props) {
        super(props);
    };

    handlePress = () => {
        return (
            <MapView.Callout tooltip>
            <View style={styles.calloutContainer}>
            <Text style={styles.calloutText}>
                $15
                </Text>
                <Text style={styles.calloutText}>
                    {this.props.markerTitle}
                </Text>
                <Text style={styles.calloutText}>
                    {this.props.markerDescription}
                </Text>
                </View>
                </MapView.Callout>
        );
    };

    render() {
        return (
            <View style={styles.container}>
            
            <MapView
            style={styles.map}
            initialRegion={this.props.initialMapRegion}
            >
            {this.props.child1}
            {this.props.child2}
            <MapView.Marker
            coordinate={this.props.markerCoordinate}
            title={this.props.markerTitle}
            description={this.props.markerDescription}
            onCalloutPress={this.props.pressHandler}
            onPress={this.handlePress}
            />
            </MapView>
                <TextInput
                    style={style.searchbar}
                    placeholder={'Search'}
                    />
                    
            </View>
        );
    };
};
