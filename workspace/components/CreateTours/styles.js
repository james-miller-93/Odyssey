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
    //marginBottom: 10,
    width: 175,
    opacity: 0.5,
    //justifyContent: 'center',
     //alignSelf: 'center',
  },
  imageContainer: {
    height:175,
    width:175,
    marginBottom: 35,

    //position: 'center',
    alignSelf: 'center',

  },

    personalInfo: {
	   	
	    fontSize: 16,
	    color: '#6b7a89',
	    //fontWeight: 'bold',
	    //paddingBottom: 8,
	    //textAlign: 'center',
	    //marginTop:25,


    },


    tourName: {

        marginLeft: 30,

    },

    location: {

        marginLeft: 60,

    },

    personalInfoContainer: {
     //justifyContent: 'center',
     //alignItems: 'center',
     marginTop: 40,
     marginLeft: 15,
     flexDirection: 'row',
    },

    generalTextInput: {
    	//position: 'absolute',
        width: 250,
        height: 40,
        ///top: 20,
        //marginLeft: 20,
        //borderRadius: 15,
        //borderWidth: 0.5,
        //borderColor: '#000',
        
        textAlign: 'center',
       
        //flex: 1,
        borderBottomWidth: 1,
        borderColor: '#000',
        //width: '80%',
        //height: '10%',
        fontSize: 20,
        bottom: 0,

      
        //backgroundColor: '#e3e7ea',

        //borderRightWidth: EStyleSheet.hairlineWidth,
        //borderLeftWidth: EStyleSheet.hairlineWidth,
        //borderTopWidth: EStyleSheet.hairlineWidth,
        //borderBottomWidth: EStyleSheet.hairlineWidth,
    },

    aboutText: {

        width: 300,
        height: 100,
        ///top: 20,
        //marginLeft: 20,
        //borderRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        //borderWidth: 0.5,
        //borderColor: '#000',
        
        textAlign: 'center',
       
        //flex: 1,
        borderWidth: 1,
        borderColor: '#000',
        //width: '80%',
        //height: '10%',
        fontSize: 15,
        //bottom: 0,



    },
    titleContainer: {
    	width: '100%',
    	height: 40,
    	alignItems: 'center',
    	//flexDirection: 'column',
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
  	//flexDirection: 'row',
    //backgroundColor: '#FFF'
    flex: 1,
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    //paddingBottom: 8,
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
        //flex: 1,

    },

  buttonText: {
        //height: '100%',
        //width: '100%',
        textAlign: 'center',
        //margin: 10,
        color: '#000',
        fontSize: 16,
        //fontWeight: 'bold',
        alignSelf: 'center',

        
    },


    button: {
        width: 260,
        height: 45,
        marginTop: 20,
        //marginRight: 20,
        //marginTop: 20,
        //flexDirection: 'row',
        //flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        //alignItems: 'center',
        //borderRadius: 40,
        //width: '70%',
        //height: '8%',
        alignSelf: 'center',
        //backgroundColor: '$secondaryColor',
        //borderRadius: 20,
        //width: "60%"
    },

     generalSave: {
        height: 45,
        width: 60,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        //borderWidth: 2,
        //borderRadius: 10,
        //flex: 1,

    },

  saveText: {
        //height: '100%',
        //width: '100%',
        textAlign: 'center',
        //margin: 10,
        color: '#000',
        fontSize: 19,
        //fontWeight: 'bold',
        //alignSelf: 'center',

        
    },


    saveContainer: {
        width: 60,
        height: 45,
        marginTop: 10,
        right: 2,
        position: 'absolute',
        //marginRight: 20,
        //marginTop: 20,
        //flexDirection: 'row',
        //flex: 1,
        backgroundColor: '#FFF',
        //justifyContent: 'center',
        //alignItems: 'center',
        //borderRadius: 40,
        //width: '70%',
        //height: '8%',
        //alignSelf: 'center',
        //backgroundColor: '$secondaryColor',
        //borderRadius: 20,
        //width: "60%"
    },

    nextIcon: {
    //marginRight: 5,
    color: 'black',
    textAlign: 'center',
    //marginLeft: 35,
    left: 5,
    //top: 15,
},
 closeIcon: {
    //marginRight: 5,
    color: 'black',
    //textAlign: 'center',
    //marginLeft: 35,
    position: 'absolute',
    top: 22,
    flex: 1,
    left: 3,
    //top: 15,
},

editIcon: {
    color: 'white',
    //textAlign: 'center',
    //marginLeft: 35,
    position: 'absolute',
    alignSelf: 'center',
    //textAlign: 'center',
    //bottom:0,
    //top: 22,
    margin: 2,
    
    //left: 3,
    //top: 15,
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