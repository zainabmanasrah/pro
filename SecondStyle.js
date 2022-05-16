import { StyleSheet } from 'react-native';
const SecondStyle = StyleSheet.create({

root:{
  backgroundColor:'#FAF4EE',
  display: "flex",
  flexDirection: 'column',
  alignItems:'center',
  minHeight:926,
  width: 428,
  
  //fontFamily: 'OriyaSangam MN-Regular',
  //fontWeight: 'bold',
  //fontStyle:'normal',
  },

  rt:{
    alignSelf: 'flex-start',
    height:425,
    marginLeft: -26,
    marginTop: -3,
    position: 'relative',
    width: 417,
  },


  Container: {

      marginTop:20,
      alignSelf: "center",  
      color: 'rgb(154, 71, 38)',
      direction: "rtl",
      letterSpacing:-1,   
      flexDirection:'row',
      letterSpacing: 1,
      lineHeight: 40,
      minHeight: 35,
      minWidth: 125,
      textAlign: "left",

  },

    image: {
      display: "flex",
      flexDirection: 'column',
      alignItems:'center',
      marginLeft:100,
      height:280,
      width:280,
      position:'absolute',
      marginTop:110,
      alignItems:'flex-start',

      },


     d2: { 
         
      height:175,
      width:230,
      alignSelf: 'flex-start',
      marginLeft: -24,
      position: 'relative',
    
     },     


     but:{
      position:'relative',
      marginTop:274,
      marginRight:0,
      paddingVertical:20.6,
      paddingHorizontal:69.9,
      alignItems:'flex-end',
      backgroundColor:'rgb(154, 71, 38)',
      borderRadius: 20,
      height:57,
      width:30,
      minWidth:279,
      display: 'flex',
  
     },

     but2:{
      position:'relative',
      marginTop:15,
      marginRight:0,
      paddingVertical:20.6,
      paddingHorizontal:69.9,
      alignItems:'flex-end',
      backgroundColor:'rgb(154, 71, 38)',
      borderRadius: 20,
      height:57,
      width:30,
      minWidth:279,
      display: 'flex',
  
     },

     text:{

     marginTop:-15,
     alignSelf: "center",  
     color: 'rgb(250, 244, 238)',
     direction: "rtl",
     letterSpacing:0,   
     flexDirection:'row',
     letterSpacing: 1,
     lineHeight: 40,
     minHeight: 35,
     minWidth: 125,
     textAlign: "left",
     }

 
});

export { SecondStyle}
