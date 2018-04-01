import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
//GENERAL
generalContainer: {
    width: '100%',
    height: '100%',
    marginTop: 20,
    flexDirection: 'row',
    
    
},

notificationContainer: {
    height: 90,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 0.5,

},


bellIcon: {

    paddingLeft: '18%',
},

noRequestsContainer: {
    top: 50,
    height: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',

},

userImage: {
    
    height: 60,
    width: 60,
},

textContainer: {

    height: 90,
    width: "84%",
    flexDirection: 'column',
    alignItems: 'center',
    


},

travelerName: {
 
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
},

message: {

    color: '#000',
    fontSize: 14,
    textAlign: 'center',
},

generalButton: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
},

//BUTTONS

buttonText: {
 
    textAlign: 'center',
    
    color: '$white',
    fontSize: 12,
    fontWeight: 'bold',
    
},


button: {
    width: 80,
    height: 25,
    marginRight: 20,

    backgroundColor: '#000',
    
},

});