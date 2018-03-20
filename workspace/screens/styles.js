import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, Platform, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView, Dimensions} from 'react-native';

export default EStyleSheet.create({
// GENERAL
  generalContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFF'

  },


//LOGIN
    loginBackground: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#5D87A8'
    },
    loginKeyboard: {
        height: '80%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        },
    loginTopPadding: {
        height: '50%',
        width: '100%',
    },
    loginTextPadding: {
        height: '4%',
        width: '100%',
    },

    transparentCover: {
        height: '100%',
        width: '100%',
        backgroundColor: '#A9A9A980',
        alignItems: 'center',
    },
        bttnText: {
        //height: '100%',
        //width: '100%',
        textAlign: 'center',
        margin: 10,
        color: '$white',
        fontSize: 16,
        fontWeight: 'bold',
        
    },
  
    odyssey: {
        textAlign: 'center',
        //margin: 10,
        top: 100,
        color: '$white',
        fontSize: 120,
        fontWeight: 'bold',
        fontFamily: 'Peaches-and-Cream',
    },


    //PROFILE STYLE
    cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  profileContainer: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 35,
    //resizeMode: 'cover',
    flex: 1,

    //width: 170,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  placeIcon: {
    color: 'white',
    fontSize: 22,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  telContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#01C89E',
    borderRadius: 85,
    borderWidth: 2,
    height: 145,
    marginBottom: 15,
    width: 145,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },

  //TEL
  innerTelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  iconRow: {
    flex: 0.2,
    justifyContent: 'center',
    //position: 'absolute',
    marginLeft: 10,
  },
  smsIcon: {
    color: 'gray',
    fontSize: 30,
  },
  smsRow: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  telIcon: {
    color: '#01C89E',
    fontSize: 25,
  },
  telNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  telNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  telNumberColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  telNumberText: {
    fontSize: 16,
  },
  telRow: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  //EMAIL
  innerEmailContainer: {
     flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  iconRow2: {
    flex: 1.7,
    justifyContent: 'center',
    //position: 'absolute',
    marginLeft: 10,
},
  emailColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  emailIcon: {
    color: '#01C89E',
    fontSize: 30,
  },
  emailNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  emailNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  emailRow: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emailText: {
    fontSize: 16,
  },

  //Separator 

  separatorContainer: {
    flexDirection: 'row',
  },
  separatorOffset: {
    flex: 2,
    flexDirection: 'row',
  },
  separator: {
    flex: 5,
    marginLeft: 30,
    flexDirection: 'row',
    borderColor: '#EDEDED',
    borderWidth: 0.8,
  },

  //Tours

    toursContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eachTourContainer: {
    justifyContent: 'space-between',
    marginBottom: 5,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
    padding: 0,
    borderWidth: 0,
  },
  tourTextButton: {
    flexDirection: 'row'
  },
  tourList: {
    borderWidth: 0,
    justifyContent: 'space-between',
    marginBottom: 5,
    marginLeft: 12,
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
    paddingLeft: 15,
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
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  wordText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
  },
  settingsIcon: {
    marginLeft: 5,
    color: 'black',
    left: 0,
    top: 15,
    //position: 'absolute',

  },
  settingWindow: {
    backgroundColor: '#FFF',
    left: 0,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'column',
    top: 20,
    borderWidth: 0.5,
    height: 150,
    width: 100,
    //flex: 1,
    justifyContent: 'center',
  },
  settingText: {
    //borderWidth: 2,
    justifyContent: 'center',
    marginBottom: 15,
    //marginLeft: 12,
    //marginRight: 12,
    marginTop: 15,
    fontSize: 15,
    fontWeight: '500',
    //lineHeight: 22,
    color: '#000',
  },
  border: {
    borderColor: '#EDEDED',
    borderWidth: 0.8,
    width: 100,
  },
  settingsBox: {
    backgroundColor: 'transparent',
    top: 20,
    position: 'absolute',
    alignItems: 'center',
    height: 60,
    width: 70,
    flexDirection: 'row',
  },

  //BUTTON 
  generalButton: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        //color: '#FFF',
        backgroundColor: '#FFF',

    },
    buttonText: {
        //height: '100%',
        //width: '100%',
        textAlign: 'center',
        margin: 10,
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        
    },

  //TRAVELER NOTIFICATION

  notification: {
    width: '100%',
        height: '100%',
        //marginTop: 20,
        //borderWidth: 2,

        //alignItems: 'center',
        //backgroundColor: '$secondaryColor',
        //borderRadius: 20,
        flexDirection: 'row',
        //flex: 1,
        //position: 'absolute',


        //bottom: 30
        
  }

});


    