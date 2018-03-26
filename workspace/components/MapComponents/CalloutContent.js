import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import {ButtonText} from '../Button';
import styles from './styles';

export default class CalloutContent extends Component {

    render() {
        return (


            <View>
                <Text>
                    {this.props.markerTitle}
                </Text>


                <View style= {styles.calloutButton}>
               
                <TouchableOpacity
                style={styles.generalButton}
                onPress={this.props.handlePress}

                >

                <View >
                    <Text style={styles.buttonText}> {this.props.markerDescription} </Text>
                </View>
            </TouchableOpacity>
            </View>
                
            </View>
        )
    }
}