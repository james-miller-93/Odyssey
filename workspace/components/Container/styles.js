import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$primaryColor',
    },
    bar: {
        height: '6%',
        width: '100%',
        backgroundColor: '$primaryColor',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: EStyleSheet.hairlineWidth,
        borderLeftWidth: EStyleSheet.hairlineWidth,
        borderTopWidth: EStyleSheet.hairlineWidth,
        borderBottomWidth: EStyleSheet.hairlineWidth,
    },
    topContainer: {
        height: '3%',
        width: '100%',
        backgroundColor: 'transparent',
    },
    transparentBar: {
        height: '6%',
        width: '100%',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
      SignUpContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
      title: {
        textAlign: 'center',
        fontSize: 40,
        margin: 10,
        top: '15%',
        color: '$white',
    }

});