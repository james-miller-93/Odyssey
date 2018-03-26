import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
     },

     calloutButton: {

     	backgroundColor: '#80808090',
     	alignSelf: 'center',
     	width: 100,
     	height: 20,
     	borderRadius: 45,

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
        color: '$black',
        fontSize: 14,
        fontWeight: 'bold',
        
    },
});