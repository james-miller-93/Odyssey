import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
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
    }
    
});