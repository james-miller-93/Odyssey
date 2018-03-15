import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';

import styles from './styles';

export default class TimeDate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dateVisible: false,
            timeVisible: false,
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
        console.log("----time-----")
        console.log(time)
        this.timeHider();
    }

    confirmDate = (date) => {
        console.log("------date------")
        console.log(date)
        this.dateHider();
    }

    render() {
        return (
            <View
            style={{
                height: '100%',
                width: '100%'
            }}
            >
                <View
                style={{
                    height: '10%',
                    width: '100%'
                }}
                />
                <TouchableOpacity
                onPress={this.timeShower}
                >
                    <Text
                    style={{
                        fontSize: 18
                    }}
                    >
                        Time
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={this.dateShower}
                >
                    <Text
                    style={{
                        fontSize: 18
                    }}
                    >
                        Date
                    </Text>
                </TouchableOpacity>
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
        )
    }
}