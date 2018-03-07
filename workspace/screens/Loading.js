import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import { checkInitialLogin } from '../actions/InitialLogin';

class Loading extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authentication_token: '',
            email: '',
        }
    }

    async componentDidMount() {
        console.log('Loading!')
        //AsyncStorage.setItem('authentication_token','')
        //AsyncStorage.setItem('email','')
        let storedToken = await AsyncStorage.getItem('authentication_token')
        let storedEmail = await AsyncStorage.getItem('email')
        this.setState( {
            authentication_token: storedToken,
            email: storedEmail
        })
        //console.log('this is the token and email ------------')
        //console.log(this.state.authentication_token)
        //console.log(this.state.email)
        this.props.dispatch(checkInitialLogin(this.state.authentication_token,this.state.email))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors && nextProps.errors !== this.props.errors) {
            this.props.navigation.navigate('Login');
        } else if(nextProps.result && nextProps.result !== this.props.result) {
            this.props.navigation.navigate('HomeAlternate');
        }
    }
    

    render() {
        return (
            <View
            style={{
                width: '100%',
                height: '100%'
            }}
            >
            <Text
            style={{
                fontSize:28
            }}
            >
                    THIS IS A LOADING PAGE.
            </Text>
            <Text
            style={{
                fontSize:28
            }}
            >
                THE APP IS LOADING.
            </Text>
            </View>
        );
    };
};

const mapStateToProps = (state) => {
    /*if (state.InitialLogin.initialErrors) {
        const errors = state.InitialLogin.initialErrors;
    } else {
        const errors = '';
    }
    if (state.InitialLogin.initialResult) {
        const result = state.InitialLogin.initialResult;
    } else {
        const result = '';
    }*/
    const errors = state.InitialLogin.initialErrors;
    const result = state.InitialLogin.result;

    return {
        errors,
        result
    };
};


export default connect(mapStateToProps)(Loading);