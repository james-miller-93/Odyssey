import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView, Dimensions} from 'react-native';

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
        height: '100%',
        width: '100%',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems: 'center',
      

        
    },
      title: {
        textAlign: 'center',
        fontSize: 40,
        margin: 5,
        color: '$black',
    },

      loginTitle: {
        textAlign: 'center',
        fontSize: 40,
        margin: 5,

        color: '$black',
        position: 'absolute',
        top: 65,
    },


        userImage: {
        width: 50,
        height: 50,
        marginHorizontal: 15
    },
        foregroundContainer: {
        width: Dimensions.get('window').width,
        height: 140,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
        logoutButton: {
        position: 'absolute',
        top: 60,
        right: 15
    },
});