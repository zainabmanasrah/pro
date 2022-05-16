import { StyleSheet } from 'react-native';
const QrcodeStyle = StyleSheet.create({

root:{
  backgroundColor:'#FFFFFF',
  display: "flex",
  flexDirection: 'column',
  alignItems:'center',
  minHeight:926,
  width: 428,
  
  },

text: {
   marginTop: 291,
   color:'rgb(154, 71, 38)',
   direction: "rtl",
   minHeight: 292,
   minWidth: 292,  
   fontSize: 20,
   lineHeight: 80,
   alignSelf:'center',
   marginRight: 180,
   


},



image: {
        display:"flex",
        flexDirection:'column',
        alignItems:'center',
        height:240,
        width:435,
        position:'absolute',
        alignItems:'flex-start',
  
        },
   
qrcode:{
    display:"flex",
    flexDirection:'column',
    alignItems:'center',
    height:141,
    width:122,
    position:'absolute',
    alignItems:'flex-start',
    right:35,
    justifyContent:'flex-end',
    alignItems:'flex-start',
},

qrcodebackgroung:{
    marginTop:-195,
    display:"flex",
    flexDirection:'column',
    alignItems:'center',
    borderWidth:1,
    borderColor:'rgb(255,255,255)',
    borderRadius:14,
    backgroundColor:'rgb(255,255,255)',
    height:181,
    width:196,
    elevation: 10,
    shadowColor:'rgb(154, 71, 38)',
    },

        

but:{
  position:'relative',
  marginRight:5,
  paddingVertical:20.6,
  paddingHorizontal:69.9,
  alignItems:'stretch',
  backgroundColor:'rgb(154, 71, 38)',
  borderRadius:70,
  height:65,
  width:250,
  display: 'flex',


 },

 buttext:{

 marginTop:-10,
 alignItems: "center",  
 color: 'rgb(250, 244, 238)',
 direction: "rtl",
 letterSpacing:0,   
 flexDirection:'row',
 letterSpacing: 1,
 lineHeight: 40,
 minWidth: 130,
 textAlign: "left",
 fontSize: 18,
 

 }


});

export {QrcodeStyle}
