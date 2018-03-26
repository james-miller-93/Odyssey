import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center'
    },
    profile: {
        height: '5%',
        width: '5%',
        borderRadius: 10,
    },
    calloutContainer: {
        height: '8%',
        width: '5%',
        backgroundColor: '$white',
    },
    calloutText:{
        flex: 1,
        fontSize: 12,
        color: '$black',
        

    },
    markerImage: {
        height: '5%',
        width: '5%',
        borderRadius: 20,
    }

});