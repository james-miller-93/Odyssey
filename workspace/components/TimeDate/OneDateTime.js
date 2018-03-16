import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';
import HideableView from 'react-native-hideable-view';

import styles from './styles';

export default class OneDateTime extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dateTimeVisible: false,
            dateTimeConfirmed: false,
            isVisible: false
        };
      };


    dateTimeHider = () => {
        this.setState({
            dateTimeVisible: false
        })
    };

    dateTimeShower = () => {
        
        this.setState({
            dateTimeVisible: true
        })
    };


    confirmDateTime = (date) => {
        this.props.handleConfirmDateTime(date);
        this.setState({ isVisible: true});
        this.dateTimeHider();
    }

    render() {
        return (
            <View>
            <View
            style={{
                height: 80,
                width: '100%',
                flexDirection: 'row',
                top: 40,
                justifyContent: 'center',
            }}
            >
                <View
                style={{
                    height: 40,
                    width: '50%',
                    borderRadius: 20,
                    backgroundColor: '#5D87A8'
                }}
                >
                <TouchableOpacity
                onPress={this.dateTimeShower}
                style={{
                    height: '100%',
                    width: '100%'
                }}
                >
                    <Text
                    style={{
                        fontSize: 18,
                        color: '#ffffff',
                        textAlignVertical: 'center',
                        textAlign: 'center',
                        top: 8
                    }}
                    >
                        Set Date and Time
                    </Text>
                </TouchableOpacity>
                </View>
                
                
                <DateTimePicker
                isVisible={this.state.dateTimeVisible}
                onConfirm={this.confirmDateTime}
                onCancel={this.dateTimeHider}
                mode={'datetime'}
                />
                
            </View>
            <HideableView
            visible={this.state.isVisible}
            removeWhenHidden={false}
            style={{
                height: 120,
                width: '100%',
                alignItems: 'center',                
                justifyContent: 'center',
            }}
            >
            <View>
                <TouchableOpacity
                onPress={this.props.handleSubmitRequest}
                style={{
                    height: 40,
                    width: '50%',
                    borderRadius: 20,
                    backgroundColor: '#5D87A8'
                }}
                >
                    <Text
                    style={{
                        fontSize: 18,
                        color: '#ffffff',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        top: 8
                    }}
                    >
                        Submit Request
                    </Text>
                </TouchableOpacity>
                </View>
            </HideableView>
            </View>
        )
    }
}