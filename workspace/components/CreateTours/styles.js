import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, Platform, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView, Dimensions} from 'react-native';

export default EStyleSheet.create({
// GENERAL
generalContainer: {
        width: '100%',
        height: '100%',
        top: 50,
      
        flexDirection: 'column',
        
    },
    textInputContainer: {

     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 10,
    },

     userImage: {
     borderColor: '#000',
    borderRadius: 85,
    borderWidth: 1.5,
    height: 175,
    width: 175,
    opacity: 0.5,

  },
  imageContainer: {
    height:175,
    width:175,
    marginBottom: 35,
    alignSelf: 'center',

  },

    personalInfo: {
	   	
	    fontSize: 16,
	    color: '#6b7a89',
    },


    tourName: {

        marginLeft: 30,

    },

    location: {

        marginLeft: 60,

    },

    personalInfoContainer: {
     marginTop: 40,
     marginLeft: 15,
     flexDirection: 'row',
    },
    
//TEXTS
    generalTextInput: {

        width: 250,
        height: 40,     
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: '#000',
        fontSize: 20,
        bottom: 0,
    },

    aboutText: {

        width: 300,
        height: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,        
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000',
        fontSize: 15,

    },
    titleContainer: {
    	width: '100%',
    	height: 40,
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    subtitle: {
   	marginTop: 20,
   	marginBottom: 17,
     marginLeft: 15,
     marginRight: 15,
     fontSize: 16,
    },

  text: {

    flex: 1,
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',

    textAlign: 'center',

  },
  //BUTTON
  generalButton: {
        height: 45,
        width: 260,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
    },

  buttonText: {
       textAlign: 'center',
        color: '#000',
        fontSize: 16,
        alignSelf: 'center',
        
    },


    button: {
        width: 260,
        height: 45,
        marginTop: 20,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignSelf: 'center',
    },

     generalSave: {
        height: 45,
        width: 60,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

  saveText: {
       
        textAlign: 'center',
        color: '#000',
        fontSize: 19,     
        
    },


    saveContainer: {
        width: 60,
        height: 45,
        marginTop: 10,
        right: 2,
        position: 'absolute',
        backgroundColor: '#FFF',

    },
//ICONS
    nextIcon: {

    color: 'black',
    textAlign: 'center',
    left: 5,
},
 closeIcon: {
    
    color: 'black',
    position: 'absolute',
    top: 22,
    flex: 1,
    left: 3,
    
},

editIcon: {
    color: 'white',
    position: 'absolute',
    alignSelf: 'center',
    margin: 2,
 
},

editContainer: {
    backgroundColor: '#000',
    height: 42,
    width: 42,
    borderRadius: 40,
    bottom:10,
    right:0,
    position: 'absolute',

},

});