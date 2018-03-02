import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    barContainer: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        borderRightWidth: EStyleSheet.hairlineWidth,
        borderLeftWidth: EStyleSheet.hairlineWidth,
        borderTopWidth: EStyleSheet.hairlineWidth,
        borderBottomWidth: EStyleSheet.hairlineWidth,
    },
    barTouchable: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    imageContainer: {
        height: 100,
        width: 125,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E59400'
    },
    barImage: {
        height: '100%',
        width: '100%'
    },
    infoContainer: {
        height: '100%',
        width: '62%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textName: {
        fontSize: 24,
        textAlign: 'center'
    },
    ratingImage: {
        height: 20,
        width: 100,  
    },
    stickerContainer: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center'   
    },
    stickerImage: {
        height: 30,
        width: 30,
    },
    displayText: {
        fontSize: 10,
        textAlign: 'center', 
    },
});