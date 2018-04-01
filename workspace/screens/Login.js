import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground, Image } from 'react-native';

import { Container, Top, ContainerLogo } from '../components/Container';
import { GeneralTextInput } from '../components/TextInput';
import { BigLogo } from '../components/Logo';
import { ButtonText, ButtonContainer} from '../components/Button';
import styles from '../screens/styles';
import { Font, AppLoading } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Login extends Component {

    //navigates to pages depending on button press
    handleSignUpPress = () => {
        this.props.navigation.navigate('Register');
    };

     handleLoginPress = () => {
        this.props.navigation.navigate('SignIn');
    };

    state = { isReady: false }

    //loads the customized font 
    componentWillMount() {

    (async() => {

    await Font.loadAsync({

    'Peaches-and-Cream': require('../assets/fonts/Peaches-and-Cream-Regular.otf')

    });

    this.setState({ isReady: true});

    })();

    }

    render() {

    if (!this.state.isReady) {

    return <AppLoading />;

    } 

    return (
    
        <ImageBackground
        style={styles.loginBackground}
        source={require('../assets/images/newBackground.jpeg')}
        >
     
        <View
            style={styles.OdysseyCover}
            >
        
            <View >
                <Text style= {styles.odyssey}>Odyssey</Text>
            </View> 

            <ButtonContainer 
            signUp = {this.handleSignUpPress.bind(this)} 
            login = {this.handleLoginPress.bind(this)} /> 
       
        </View>
        </ImageBackground>

    
    
        );
    };
};

