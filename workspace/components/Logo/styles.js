import EStyleSheet from 'react-native-extended-stylesheet';

const LOGO_HEIGHT = '20%';
const LOGO_WIDTH = '90%';

export default EStyleSheet.create({
    container: {
        width: LOGO_WIDTH,
        height: LOGO_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 11,

    },
    text: {
        width: '100%',
        height: '100%',
        color: '$secondaryColor',
        fontSize: 56,
        fontWeight: '800',
        textAlign: 'center'

    }
});