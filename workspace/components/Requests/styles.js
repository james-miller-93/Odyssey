import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    generalContainer: {
        width: '100%',
        height: '100%',
        marginTop: 20,
        //borderWidth: 2,

        //alignItems: 'center',
        //backgroundColor: '$secondaryColor',
        //borderRadius: 20,
        flexDirection: 'row',
        //position: 'absolute',


        //bottom: 30
        
    },

    notificationContainer: {
        height: 90,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 0.5,

    },


    bellIcon: {

        paddingLeft: '18%',
    },

    noRequestsContainer: {
        top: 50,
        height: 70,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000',
        //borderWidth: 0.5,

    },

     userImage: {
    
    //borderColor: '#01C89E',
    //borderRadius: 85,
    //borderWidth: 2,
    height: 60,
    //marginBottom: 0,
    width: 60,
  },
  textContainer: {

    height: 90,
    width: "84%",
    flexDirection: 'column',
    alignItems: 'center',
    


  },

    travelerName: {
    //paddingTop: 10,
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    //paddingBottom: 8,
    textAlign: 'center',
    //marginRight: 5,
  },

   message: {
    //paddingTop: 10,
    color: '#000',
    fontSize: 14,
    //fontWeight: 'bold',
    //paddingRight: 10,
    textAlign: 'center',
    //flexDirection: 'row',
  },
   generalButton: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },

  buttonText: {
        //height: '100%',
        //width: '100%',
        textAlign: 'center',
        //margin: 10,
        color: '$white',
        fontSize: 12,
        fontWeight: 'bold',
        
    },


    button: {
        width: 80,
        height: 25,
        marginRight: 20,
        //marginTop: 20,
        backgroundColor: '#000',
        //borderRadius: 40,
        //width: '70%',
        //height: '8%',
        //alignSelf: 'center',
        //backgroundColor: '$secondaryColor',
        //borderRadius: 20,
        //width: "60%"
    },
  
});