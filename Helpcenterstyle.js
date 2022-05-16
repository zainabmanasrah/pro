import { StyleSheet } from 'react-native';
const Helpcenterstyle = StyleSheet.create({

root:{
  backgroundColor:'#FFFFFF',
  display: "flex",
  flexDirection: 'column',
  alignItems:'center',
  minHeight:926,
  width: 428,
  
  },

text: {
    marginTop: 151,
    color:'rgb(154, 71, 38)',
    direction: "rtl",
   fontWeight: '400',
   minHeight: 292,
   minWidth: 292,  
   fontSize: 25,
   lineHeight: 80,
   flexShrink:1,
   alignSelf:'flex-end',

},

    image: {
        display:"flex",
        flexDirection:'column',
        alignItems:'center',
        height:195,
        width:430,
        position:'absolute',
        alignItems:'flex-start',
  
        },
   
inputfield:{
  maxWidth:368,
  height: 55,
  marginTop:-185,
  borderWidth:1,
  borderRadius: 10,
  paddingHorizontal:17,
  color:'rgb(154, 71, 38)',
  borderColor: 'rgb(154, 71, 38)',
  backgroundColor:'#FAF4EE',
	borderWidth:1,
  marginRight:20,
  textAlign:'right',

},
    

but:{
  marginTop:200,
  marginRight:10,
  backgroundColor:'rgb(154, 71, 38)',
  borderRadius:70,
  height:50,
  width:310,


 },

 buttext:{
 marginTop:-40,
 color: 'rgb(250, 244, 238)',
 fontSize: 22,
 fontWeight:'700',
marginRight:10,

 }


});

export {Helpcenterstyle}
