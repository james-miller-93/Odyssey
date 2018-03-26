import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, Platform, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView, Dimensions} from 'react-native';

export default EStyleSheet.create({
// GENERAL
generalContainer: {
        width: '100%',
        height: '100%',
        top: 70,
      
        flexDirection: 'column',
        
    },

    //Tours
    imageContainer: {
    	marginBottom: 20,

    },

    container: {
      height: '100%',
        width: '100%',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems: 'center',
      
      },

    editPress: {
    	backgroundColor: '#FFF',
    	height: 25,
    	width: 25,

  	position: 'absolute',
  	right:42,
    },
    deletePress: {
    	backgroundColor: '#FFF',
    	height: 25,
    	width: 25,
    
  	alignItems: 'center',
  	position: 'absolute',
  	right:17,
    },
    plusPress: {
    	
    	left: 10,
  		bottom: 10,
  		marginBottom: 40,
  		width: 85,
    },

  eachTourContainer: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: Dimensions.get('window').width * 1,
    marginBottom: 5,
    
  },
  tourText: {
    left: 10,

  },
  tourList: {
    borderWidth: 0,
    justifyContent: 'space-between',
    marginBottom: 5,
    marginLeft: 2,
    marginRight: 12,
    marginTop: 10,
    padding: 0,
  },
  date: {
    color: 'gray',
    fontSize: 12.5,
  },
  tourRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 15,
    paddingTop: 6,
    width: Dimensions.get('window').width * 1,
  },
  postImage: {
    backgroundColor: 'rgba(0, 0, 0, 0.075)',
    height: 200,
    width: 450,

  },
  wordRow: {
    marginBottom: 10,
    paddingLeft: 25,
    paddingRight: 15,
    paddingTop: 6,
  },
  wordText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
  },

  plusIcon: {
  	
  },

  editIcon: {
  
  	color: 'black',


  },

  deleteIcon: {

  },

});