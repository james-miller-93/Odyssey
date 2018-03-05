import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    generalContainer: {
        width: '60%',
        height: '8%',
        alignItems: 'center',
        //backgroundColor: '$secondaryColor',
        borderRadius: 20,

        //position: 'absolute',
        //bottom: 30
        
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
        margin: 10,
        color: '$white',
        fontSize: 16,
        fontWeight: 'bold',
        
    },


    button: {
        width: 250,
        height: 40,
        margin: 10,
        //backgroundColor: '$secondaryColor',
        borderRadius: 40,
        //width: '70%',
        //height: '8%',
        //alignSelf: 'center',
        //backgroundColor: '$secondaryColor',
        //borderRadius: 20,
        //width: "60%"
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
        //alignItems: 'center',
        
    }



});