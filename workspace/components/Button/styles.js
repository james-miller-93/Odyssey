import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({

    generalContainer: {
        width: '60%',
        height: '8%',
        alignItems: 'center',
        borderRadius: 20,
        
    },
    generalButton: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        textAlign: 'center',
        margin: 10,
        color: '$black',
        fontSize: 16,
        fontWeight: 'bold',
        
    },
    buttonNewText: {
        textAlign: 'center',
        margin: 10,
        color: '$white',
        fontSize: 16,
        fontWeight: 'bold',
        
    },


    button: {
        width: 250,
        height: 40,
        margin: 10, 
        borderRadius: 40,
     
    },
    facebookButton: {
        width: 250,
        height: 40,
        margin: 10,
        backgroundColor: '#4682B4',
        borderRadius: 40,
    },

      buttonContainer: {
        flex: 1,
        justifyContent: 'center',
 
        
    }



});