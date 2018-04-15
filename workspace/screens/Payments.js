import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground, TextInput,AsyncStorage, Dimensions, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { GeneralTextInput } from '../components/TextInput';
import { ButtonText } from '../components/Button';
import { Errors } from '../components/Errors';
//import styles from '../screens/styles';
import { connectAlert } from '../components/Alert';
import stripe from 'tipsi-stripe'
import EStyleSheet from 'react-native-extended-stylesheet';
import Stripe from 'react-native-stripe-api';
const SWIPER_HEIGHT = 180;
import CreditCard, {CardImages} from 'react-native-credit-card';
import Swiper from 'react-native-swiper';
const {height, width} = Dimensions.get('window');
import {submitPaymentInfo} from '../actions/Payments';


//const apiKey = 'pk_test_dzoQhcoz1gZQt1s9rYvkTAwx';
//const client = new Stripe(apiKey);

//stripe.setOptions({
  //publishableKey: 'pk_test_dzoQhcoz1gZQt1s9rYvkTAwx',

//})

const styles = EStyleSheet.create({
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: width,
        height: height
    },
    container: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        paddingTop: 30
    },
    wrapper: {
        height: SWIPER_HEIGHT,
        width: 250,
    },
    slide: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        backgroundColor: '#FFF',
        flexDirection: 'column'

    },
    text: {
        
    },
    card: {
        marginHorizontal: 10,
        marginBottom: 30,
        backgroundColor: '#fff',
        borderRadius: 3,
        //elevation: 3,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: '#ddd',
        padding: 10,
    },
    button: {
        height: 40,
        backgroundColor: '#1ba549',
        justifyContent: 'center',
    },
    textButton: {
        textAlign: 'center',
        color: '#fff'
    }

});


class Payments extends Component {


	constructor(props) {
        super(props);
        this.state = {
        	authentication_token: '',
        	email: '',
        	loading: false,
		    token: null,
		    errors: null,
		    result: null,
		    params: {
		      number: '4242424242424242',
		      expMonth: 12,
		      expYear: 24,
		      cvc: '223',
		      name: 'Test User',
		      currency: 'usd',
		      addressLine1: '123 Test Street',
		      addressLine2: 'Apt. 5',
		      addressCity: 'Test City',
		      addressState: 'Test State',
		      addressCountry: 'Test Country',
		      addressZip: '55555',
    		},
  		}

};


	//waiting on email and token from backend
     async componentDidMount() {
        let storedToken = await AsyncStorage.getItem('authentication_token')
        let storedEmail = await AsyncStorage.getItem('email')
        this.setState( {
            authentication_token: storedToken,
            email: storedEmail
        })
      };

    //checking if object received from backend is a valid result or error
      componentWillReceiveProps(nextProps) {
  	if (nextProps.errors && nextProps.errors !== this.props.errors) {
      this.props.alertWithType('error','Error',nextProps.errors);
  	} else if(nextProps.result && nextProps.result !== this.props.result) {
      console.log(nextProps.result);

  	}

}

   

    submitPayment ()  {
    
      //this.setState({ loading: true, token: null, error: null })
     const apiKey = 'pk_test_dzoQhcoz1gZQt1s9rYvkTAwx';
	 const client = new Stripe(apiKey);

	 const card = {
	 	number : '4242424242424242',
      	exp_month : '09',
      	exp_year : '18',
      	cvc: '111',
      	name: 'Test User',
		currency: 'usd',
	 }
     // const token = await stripe.createTokenWithCard(this.state.params)
      //this.setState({ loading: false, error: undefined, token })
     client.createToken(card).then((token) => {
      console.log(token);
      this.setState({ loading: false, error: undefined, token });
      this.props.dispatch(submitPaymentInfo(this.state.authentication_token,this.state.email,this.state.token))

    }).catch((error) => {
      //this.setState({ loading: false, error })
      console.log(error);
      this.setState({ loading: false, error });
    })

   /* charge = {
    	amount: 1,
    	currency: 'usd',
    	description: 'Example charge',
    	source: this.state.token,
    }
    client.chargeCreate(charge).then((result) => {

    	console.log(result);

    }).catch((error) => {
    	console.log(error)
    });*/

    
  	
 
 		
		// Create a Stripe token with new card infos
		//const token = client.createToken('4242424242424242' , '09', '18', '111');
		//const token = client.createToken('4242424242424242' , '09', '18', '111');
		
		//then(function(result)
		//const token = client.createTokenWithCardAsync(params)
        

 
    }

    render() {
        var cardTypes = []; 
        for (var key in CardImages) {
            cardTypes.push({type: key, image: CardImages[key]});
        }
        if (this.state.restoring) {
            return null;
        }
        return(
   				
   				<View style={{
        backgroundColor: '#f2f2f2',
        flex: 1,
        paddingTop: 30
    }}>
                <Image style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: width,
        height: height
    }} source={require('../assets/images/LoginCover.jpg')} resizeMode={'cover'} />
            
                    
                    
                        <View style={styles.card}>
                       
                            <TextInput ref="number" placeholder={"CARD NUMBER"} placeholderTextColor={'#000'} 
                            placeholderautoFocus={true} value={'4242424242424242'} onChangeText={(number) => this.setState({number})}/>
                     
                    </View>
                 
                        <View style={styles.card}>
                            
                            <TextInput placeholder={"CARD HOLDER'S NAME"} placeholderTextColor={'#000'} 
                            placeholderautoFocus={true}ref="name" value={this.state.name} onChangeText={(name) => this.setState({name})}/>
                       
                    </View>
                   
                        <View style={styles.card}>
                         
                            <TextInput placeholder={"EXPIRY MONTH"} placeholderTextColor={'#000'} 
                            placeholderautoFocus={true}ref="expiryMonth" value={'09'} onChangeText={(expiryMonth) => this.setState({expiryMonth})}/>
                      		
                    </View>
                    <View style={styles.card}>
                         
                            <TextInput placeholder={"EXPIRY YEAR"} placeholderTextColor={'#000'} 
                            placeholderautoFocus={true}ref="expiryYear" value={'18'} onChangeText={(expiryYear) => this.setState({expiryYear})}/>
                      
                    </View>
                 
                        <View style={styles.card}>
                           
                            <TextInput placeholder={"CVV/CVC NUMBER"} placeholderTextColor={'#000'} 
                            placeholderautoFocus={true}ref="cvc" value={'111'} onChangeText={(cvc) => this.setState({cvc})}/>
              
                    </View>
                    
                        <View style={styles.card}>
                           
                            <View style={{flexDirection: 'row'}}>
                                {cardTypes.map((cardType) => {
                                    return (
                                        <TouchableOpacity key={cardType.type} onPress={() => this.setState({type: cardType.type})}>
                                            <View>
                                                <Image source={{uri: cardType.image}} style={{width: 57, height: 35, marginHorizontal: 5}} />
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                   
                    </View>

                   <TouchableOpacity onPress={this.submitPayment.bind(this)}>
                                          <Text> SUMBIT </Text>
                        </TouchableOpacity>
               
                
            </View>
        );
    }
}


//a function that maps the states in the reducers to the props in screens
const mapStateToProps = (state) => {
   
	const token = state.Payments.token;
	const errors = state.Payments.errors;
    const result = state.Payments.result;
   

    return {

        token,
        errors,
        result,
      
    };
};


export default connect(mapStateToProps)(connectAlert(Payments));
               