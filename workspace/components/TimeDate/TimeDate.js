import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';
import HideableView from 'react-native-hideable-view';

import styles from './styles';

export default class TimeDate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dateVisible: false,
            timeVisible: false,
            isVisible: false,
            timeConfirmed: false,
            dateConfirmed: false,
        };
      };

    timeHider = () => {
        this.setState({
            timeVisible: false
        })
    };

    dateHider = () => {
        this.setState({
            dateVisible: false
        })
    };

    timeShower = () => {
        
        this.setState({
            timeVisible: true
        })
    };

    dateShower = () => {
        
        this.setState({
            dateVisible: true
        })
    };

    confirmTime = (time) => {
        this.props.handleConfirmTime(time);
        //console.log("----time-----")
        //console.log(time)
        this.setState({ timeConfirmed: true});
        if (this.state.dateConfirmed) {
            this.setState({ isVisible: true })
        }
        this.timeHider();
    }

    confirmDate = (date) => {
        this.props.handleConfirmDate(date);
        //console.log("------date------")
        //console.log(date)
        this.setState({ dateConfirmed: true})
        if (this.state.timeConfirmed) {
            this.setState({ isVisible: true })
        }
        this.dateHider();
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
                    width: '30%',
                    borderRadius: 20,
                    backgroundColor: '#5D87A8'
                }}
                >
                <TouchableOpacity
                onPress={this.timeShower}
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
                        Set Time
                    </Text>
                </TouchableOpacity>
                </View>
                <View
                style={{
                    height: 80,
                    width: '20%'
                }}
                />
                <View
                style={{
                    height: 40,
                    width: '30%',
                    borderRadius: 20,
                    backgroundColor: '#5D87A8'
                }}
                >
                <TouchableOpacity
                onPress={this.dateShower}
                style={{
                    height: '100%',
                    width: '100%'
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
                        Set Date
                    </Text>
                </TouchableOpacity>
                </View>
                <DateTimePicker
                isVisible={this.state.timeVisible}
                onConfirm={this.confirmTime}
                onCancel={this.timeHider}
                mode={'time'}
                />
                <DateTimePicker
                isVisible={this.state.dateVisible}
                onConfirm={this.confirmDate}
                onCancel={this.dateHider}
                mode={'date'}
                minimumDate={new Date()}
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