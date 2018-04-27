import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, ImageBackground , AsyncStorage} from 'react-native';
import { connect } from 'react-redux';
import { Container , SignUpContainer} from '../components/Container';
import { GeneralTextInput } from '../components/TextInput';
import { ButtonText } from '../components/Button';
import { Errors } from '../components/Errors';
import styles from '../screens/styles';
import { CreateTourContainer } from '../components/CreateTours';
import { connectAlert } from '../components/Alert';
import { createTourSubmit, createTourResult, editTourSubmit} from '../actions/CreateTours';
import {viewTours} from '../actions/ViewTours';


class CreateTours extends Component {


	//Intializing the state and props
    constructor(props) {
        super(props);
        this.state = {
            authentication_token: "",
            email: "",
            tourInfo: {
            	city: this.props.tourInfo.city,
			    title: this.props.tourInfo.title,
			    duration: this.props.tourInfo.duration,
			    description: this.props.tourInfo.description,
			    tourID: this.props.tourInfo.tourID,
			 	max_persons: this.props.tourInfo.max_persons,
			 	is_daytrip: this.props.tourInfo.is_daytrip,
		        is_foodie: this.props.tourInfo.is_foodie,
		        is_landmarks: this.props.tourInfo.is_landmarks,
		        is_museums: this.props.tourInfo.is_museums,
		        is_nightlife: this.props.tourInfo.is_nightlife,
		        is_outdoors: this.props.tourInfo.is_outdoors, 
		        price: this.props.tourInfo.price,
		        
            }
         
        }
    }

    //handle when submit button is pressed, could be an edit submit or create tour
    handleSubmitPress = () => {
		if (this.props.tourMode === 'create') {
        	this.props.dispatch(createTourSubmit(this.state.authentication_token,this.state.email,this.state.tourInfo))
		} else if (this.props.tourMode === 'edit') {
			this.props.dispatch(editTourSubmit(this.state.authentication_token,this.state.email,this.state.tourInfo))
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

      	this.props.dispatch(viewTours(this.state.authentication_token,this.state.email))

  	}

  	else if(nextProps.viewToursError && nextProps.viewToursError !== this.props.viewToursError) {
            this.props.alertWithType('error','Error',nextProps.viewToursError)
        } else if(nextProps.viewToursResult && nextProps.viewToursResult !== this.props.viewToursResult) {
            
            this.props.navigation.navigate('ManageTours');
            
        }
	}

	//updating the state depending on the text changed
	newName = (text) => {
		const newState = {
			...this.state.tourInfo,
			title: text

		}

		this.setState({ tourInfo : newState })
	}

	newLocation = (text) => {
		const newState = {
			...this.state.tourInfo,
			city: text

		}

		this.setState({ tourInfo : newState })
	}

	newDescription = (text) => {
		const newState = {
			...this.state.tourInfo,
			description: text

		}

		this.setState({ tourInfo : newState })
	}

	newDuration = (text) => {
		const newState = {
			...this.state.tourInfo,
			duration: text

		}

		this.setState({ tourInfo : newState })
	}

	newPrice = (text) => {
		const newState = {
			...this.state.tourInfo,
			price: text

		}

		this.setState({ tourInfo : newState })
	}

	NewMaxPeople = (text) => {
		const newState = {
			...this.state.tourInfo,
			max_persons: text

		}

		this.setState({ tourInfo : newState })
	}

	NewNightLife = () => {
		const newState = {
			...this.state.tourInfo,
			is_nightlife: !this.state.tourInfo.is_nightlife

		}

		this.setState({ tourInfo : newState })
	}

	NewFood = () => {
		const newState = {
			...this.state.tourInfo,
			is_foodie: !this.state.tourInfo.is_foodie

		}

		this.setState({ tourInfo : newState })
	}

	NewDaytrip = () => {
		const newState = {
			...this.state.tourInfo,
			is_daytrip: !this.state.tourInfo.is_daytrip

		}

		this.setState({ tourInfo : newState })
	}

	NewLandmarks = () => {
		const newState = {
			...this.state.tourInfo,
			is_landmarks: !this.state.tourInfo.is_landmarks

		}

		this.setState({ tourInfo : newState })
	}

	NewMuseums = () => {
		const newState = {
			...this.state.tourInfo,
			is_museums: !this.state.tourInfo.is_museums

		}

		this.setState({ tourInfo : newState })
	}

	NewNightLife = () => {
		const newState = {
			...this.state.tourInfo,
			is_nightlife: !this.state.tourInfo.is_nightlife

		}

		this.setState({ tourInfo : newState })
	}

	NewOutdoors = () => {
		const newState = {
			...this.state.tourInfo,
			is_outdoors: !this.state.tourInfo.is_outdoors

		}

		this.setState({ tourInfo : newState })
	}

  	render() {
        return (

 

       <View
            style={styles.generalContainer}
           
        >

            <CreateTourContainer navigation={this.props.navigation} 
            handleSavePress = {this.handleSubmitPress}
            name= {this.newName}
            oldName = {this.props.tourInfo.title}
            location= {this.newLocation}
            oldLocation = {this.props.tourInfo.city} 
            description = {this.newDescription}
            oldDescription = {this.props.tourInfo.description}
            maxPeople = {this.NewMaxPeople}
            oldMaxPeople = {this.props.tourInfo.max_persons.toString()}
          	duration = {this.newDuration}
            oldDuration = {this.props.tourInfo.duration.toString()}
            price = {this.newPrice}
            oldPrice = {this.props.tourInfo.price.toString()}
            nightLifePress = {this.NewNightLife}
           	museumsChecked = {this.state.is_museums}
           	foodChecked = {this.state.is_foodie}
           	nightLifeChecked = {this.state.is_nightlife}
           	outdoorsChecked = {this.state.is_outdoors}
           	landmarksChecked = {this.state.is_landmarks}
           	daytripChecked = {this.state.is_daytrip}
            foodPress = {this.NewFood}
            daytripPress ={this.NewDaytrip}
            museumsPress = {this.NewMuseums}
            landmarksPress = {this.NewLandmarks}
            outdoorsPress = {this.NewOutdoors}


            />

        </View>

 		);
	};
};

//a function that maps the states in the reducers to the props in screens
const mapStateToProps = (state) => {
   
	const tourInfo = state.CreateTours.tourInfo;
	const errors = state.CreateTours.errors;
    const result = state.CreateTours.result;
    const viewToursError = state.ViewTours.errors;
	const viewToursResult = state.ViewTours.result;
	const tourMode = state.CreateTours.mode;


    return {

        tourInfo,
        errors,
        result,
        viewToursError,
		viewToursResult,
		tourMode
    };
};


export default connect(mapStateToProps)(connectAlert(CreateTours));