import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    generalContainer: {
        width: 300,
        height: 45,
        margin: 10,
        borderRadius: 40,

        //width: '80%',
        //height: '10%',
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '$transparentGray',
        //borderRightWidth: EStyleSheet.hairlineWidth,
        //borderLeftWidth: EStyleSheet.hairlineWidth,
        //borderTopWidth: EStyleSheet.hairlineWidth,
        //borderBottomWidth: EStyleSheet.hairlineWidth,
    },

    generalText: {

        textAlign: 'center',
        fontSize: 16,
        color: '$black',
        margin: 10,
        //placeholderTextColor : '$white',
    }
});