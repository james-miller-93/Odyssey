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
import { createTourSubmit, createTourResult} from '../actions/CreateTours';


class CreateTours extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authentication_token: "",
            email: "",
            tourInfo: {
            	city: '',
			    title: '',
			    duration: '',
			    description: '',
			    tourID: '',
			 	max_persons: '',
			 	is_daytrip: false,
		        is_foodie: false,
		        is_landmarks: false,
		        is_museums: false,
		        is_nightlife: false,
		        is_outdoors: false, 
		        price: '',
            }
         
        }
    }

    handleSubmitPress = () => {
        this.props.dispatch(createTourSubmit(this.state.authentication_token,this.state.email,this.state.tourInfo))
        //this.props.dispatch(clearErrorLog())
    };

     async componentDidMount() {
        let storedToken = await AsyncStorage.getItem('authentication_token')
        let storedEmail = await AsyncStorage.getItem('email')
        this.setState( {
            authentication_token: storedToken,
            email: storedEmail
        })
      };

    
      componentWillReceiveProps(nextProps) {
  	if (nextProps.errors && nextProps.errors !== this.props.errors) {
      this.props.alertWithType('error','Error',nextProps.errors);
  	} else if(nextProps.result && nextProps.result !== this.props.result) {
      console.log(nextProps.result);
      this.props.navigation.navigate('ManageTours');


      //what exactly needs to happen here?
  	}
	}

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

            oldMaxPeople = {this.props.tourInfo.max_persons}
           // languages = {(text) => {this.setState({ tourInfo: {languages: text} })}} 
           // oldLanguages = {this.props.tourInfo.languages}
          	duration = {this.newDuration}
            oldDuration = {this.props.tourInfo.duration}
            price = {this.newPrice}
            oldPrice = {this.props.tourInfo.price}
            //oldNightLife??
            nightLifePress = {this.NewNightLife}
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


const mapStateToProps = (state) => {
   
	const tourInfo = state.CreateTours.tourInfo;
	const errors = state.CreateTours.errors;
    const result = state.CreateTours.result;


    return {

        tourInfo,
        errors,
        result,
    };
};


export default connect(mapStateToProps)(connectAlert(CreateTours));