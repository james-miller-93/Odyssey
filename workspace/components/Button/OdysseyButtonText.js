import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button} from 'react-native';

import styles from './styles';
import EStylesheet from 'react-native-extended-stylesheet'

export default class OdysseyButtonText extends Component {
    

    render() {

        return (
            <View style= {([styles.button,  this.props.bgColor ])}>
               
                <TouchableOpacity
                style={styles.generalButton}
                onPress={this.props.handlePress}

                >

                <View >
                    <Text style={styles.buttonNewText}> {this.props.displayText} </Text>
                </View>
                
                </TouchableOpacity>
            </View>
        )
    }
}

