import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import { checkInitialLogin } from '../actions/InitialLogin';

class Loading extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authentication_token: '',
            email: '',
            visible: false,

        }
    }

    async componentDidMount() {
        
        let storedToken = await AsyncStorage.getItem('authentication_token')
        let storedEmail = await AsyncStorage.getItem('email')
        this.setState( {
            authentication_token: storedToken,
            email: storedEmail,
            visible: !this.state.visible
        })
      
        this.props.dispatch(checkInitialLogin(this.state.authentication_token,this.state.email))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors && nextProps.errors !== this.props.errors) {
            this.props.navigation.navigate('Login');
            this.state.visible= false;
        } else if(nextProps.result && nextProps.result !== this.props.result) {
            
            this.props.navigation.navigate('UserRole');
            this.state.visible= false;
        }
    }
    

    render() {
        return (
     
            <View
            style={{
                width: '100%',
                height: '100%',
                flex: 1,

            }}
            >
            <Spinner visible={this.state.visible}/>
            </View>
        );
    };
};

const mapStateToProps = (state) => {
   
    const errors = state.InitialLogin.initialErrors;
    const result = state.InitialLogin.result;

    return {
        errors,
        result
    };
};


export default connect(mapStateToProps)(Loading);