import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    generalContainer: {
        width: '80%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$white',
        borderRightWidth: EStyleSheet.hairlineWidth,
        borderLeftWidth: EStyleSheet.hairlineWidth,
        borderTopWidth: EStyleSheet.hairlineWidth,
        borderBottomWidth: EStyleSheet.hairlineWidth,
    },

    generalText: {
        textAlign: 'left',
        fontSize: 22
    },

});