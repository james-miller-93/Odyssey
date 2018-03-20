import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import { Container , SignUpContainer} from '../components/Container';
import { GeneralTextInput } from '../components/TextInput';
import { ButtonText } from '../components/Button';
import { Errors } from '../components/Errors';
import styles from '../screens/styles';
import { CreateTourContainer } from '../components/CreateTours';

import { connectAlert } from '../components/Alert';

export default class CreateTours extends Component {


  	render() {
        return (

 

       <View
            style={styles.generalContainer}
           
        >


            <CreateTourContainer navigation={this.props.navigation} />

        </View>

 		);
	};
};