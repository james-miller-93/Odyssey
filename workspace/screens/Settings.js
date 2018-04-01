import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import { ButtonText } from '../components/Button';
import HomeAlternate from './HomeAlternate';
import { connectAlert } from '../components/Alert';


import { sendLogOutRequest } from '../actions/LogOut'

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authentication_token: '',
            email: '',
        }
    }

    async componentDidMount() {
        let storedToken = await AsyncStorage.getItem('authentication_token')
        let storedEmail = await AsyncStorage.getItem('email')
        this.setState( {
            authentication_token: storedToken,
            email: storedEmail
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors && nextProps.errors !== this.props.errors) {
            this.props.alertWithType('error','Error',nextProps.errors);
        } else if(nextProps.result && nextProps.result !== this.props.result) {
            this.props.navigation.navigate('Login');
        }
    }

    handleLogOutPress = () => {
        this.props.dispatch(sendLogOutRequest(this.state.authentication_token,this.state.email));
    }

    render() {
        return (
        <View>
            <Text>
                SETTINGS
            </Text>
            <ButtonText
            displayText={'Log Out'}
            handlePress={this.handleLogOutPress}
            bgColor = {{ backgroundColor: '#F9A602'}}
            />
        </View>
        );
    };
};

const mapStateToProps = (state) => {
    const errors = state.LogOut.errors;
    const result = state.LogOut.result;

    return {
        errors,
        result
    }
}

export default connect(mapStateToProps)(connectAlert(Settings));