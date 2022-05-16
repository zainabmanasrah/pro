import { StyleSheet } from 'react-native';
const AdsAndOfferStyle = StyleSheet.create({

root:{
  display: "flex",
  flexDirection: 'column',
  alignItems:'center',
  width: 428,
  backgroundColor:'#ffffff'
  
  },

text: {
    marginTop: 241,
    color:'rgb(154, 71, 38)',
    direction: "rtl",
   fontWeight: '400',
   minHeight: 292,
   minWidth: 292,  
   fontSize: 25,
   lineHeight: 80,
   flexShrink:1,
   alignSelf:'flex-end',
   marginRight: 47.97,

},


image: {
        display:"flex",
        flexDirection:'column',
        alignItems:'center',
        height:110,
        width:430,
        position:'absolute',
        alignItems:'flex-start',
  
},
   
inputfield:{
  width:190,
  height:45,
  marginTop:155,
  borderWidth:1,
  fontStyle:'normal',
  paddingVertical:0,
  paddingHorizontal:25,
  color:'rgb(112, 112, 112)',
  borderColor: 'rgb(154, 71, 38)',
  borderWidth:1,
  marginRight:190,
  textAlign:'right',
  backgroundColor:'rgb(255,255, 255)',


},
      

inputfield1:{
    width:180,
    height: 45,
    marginTop:-45,
    borderWidth:1,
    fontStyle:'normal',
    paddingVertical:0,
    paddingHorizontal:17,
    color:'rgb(112, 112, 112)',
    borderColor: 'rgb(154, 71, 38)',
    borderWidth:1,
    marginRight:160,
    textAlign:'right',
    flexDirection:'row-reverse',
    borderColor: 'rgb(154, 71, 38)',
    borderWidth:1,
    backgroundColor:'rgb(255,255, 255)',
  },
 
 

    text: {
       marginTop: 8,
       color:'rgb(154, 71, 38)',
       fontWeight: '700',
       fontSize: 13,
       lineHeight: 25,
       alignSelf:'flex-end',
       backgroundColor:'rgb(250,244, 238 )',
       borderColor: 'rgb(154, 71, 38)',
       borderWidth:1,
       shadowColor:'rgb(154, 71, 38)',
       marginRight:100,
       width:250,
       height:80,
       textAlign:'center',
marginTop:10 ,
padding:25 ,
 },

});

export {AdsAndOfferStyle}
