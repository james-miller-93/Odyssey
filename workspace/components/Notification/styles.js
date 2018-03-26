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

    bellIcon: {

        paddingLeft: '18%',
    },
    notificationContainer: {
        height: 70,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 0.5,

    },

    noNotificationContainer: {
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

    tourGuideName: {
    //paddingTop: 10,
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    //paddingBottom: 8,
    textAlign: 'center',
  },

   message: {
    //paddingTop: 10,
    color: '#000',
    fontSize: 14,
    //fontWeight: 'bold',
    //paddingBottom: 8,
    textAlign: 'center',
  },
  
});