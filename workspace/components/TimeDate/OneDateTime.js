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
                height: 50,
                width: '100%',
                flexDirection: 'row',
                top: 10,
                justifyContent: 'center',
            }}
            >
                <View
                style={{
                    height: 45,
                    width: '100%',
                    //borderRadius: 10,
                    backgroundColor: '#000'
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
               height: 60,
                width: '100%',
               
            }}
            >
            <View style={{
               height: 50,
                width: '100%',
                flexDirection: 'row',
                top: 15,
                justifyContent: 'center',
            }}>
            <View style={{
                    height: 45,
                    width: '100%',
                    
                    backgroundColor: '#000'
                }}>

                <TouchableOpacity
                onPress={this.props.handleSubmitRequest}
                style={{width:'100%',height: '100%'}}
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
                </View>
            </HideableView>
            </View>
        )
    }
}