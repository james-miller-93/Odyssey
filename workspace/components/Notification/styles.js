import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    generalContainer: {
        width: '100%',
        height: '100%',
        marginTop: 20,
        flexDirection: 'row',
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
    },

    userImage: {
    
        height: 60,
        width: 60,
  },

    tourGuideName: {

        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
  },

   message: {

    color: '#000',
    fontSize: 14,
    textAlign: 'center',
  },
  
});