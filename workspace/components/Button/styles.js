import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    generalContainer: {
        width: '60%',
        height: '8%',
        alignItems: 'center',
        //backgroundColor: '$secondaryColor',
        borderRadius: 20,
        
    },
    generalButton: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        top: 5,
        color: '$white',
        fontSize: 28,
        fontWeight: 'bold'
    },

});