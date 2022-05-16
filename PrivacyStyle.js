import { StyleSheet } from 'react-native';
const PrivacyStyle = StyleSheet.create({

root:{
  backgroundColor:'#FFFFFF',
  display: "flex",
  flexDirection: 'column',
  alignItems:'center',
  minHeight:926,
  width: 428,
  
  },


image: {
        display:"flex",
        flexDirection:'column',
        alignItems:'center',
        height:175,
        width:450,
        position:'absolute',
        alignItems:'flex-start',
  
        },
   

text: {
           marginTop: 180,
           color:'rgb(154, 71, 38)',
           minHeight: 270,
           fontSize: 20,
        marginLeft:140,
        },

text1: {
            marginTop: 0.5,
            color:'rgb(154, 71, 38)',
            minHeight: 292,
            fontSize: 20,
            lineHeight: 80,
         marginLeft:100,
         
         },
         text2: {
            marginTop: 0.5,
            color:'rgb(154, 71, 38)',
            minHeight: 292,
            fontSize: 20,
            lineHeight: 80,
         marginLeft:140,
         
         },


inputfield:
{
  width:248,
  height:55,
  marginTop:-205,
  borderWidth:1,
  borderRadius:10,
  paddingHorizontal:17,
  color:'rgb(112, 112, 112)',
  borderColor: 'rgb(154, 71, 38)',
  borderWidth:1,
  marginRight: 47.97,
  textAlign:'right',
  alignSelf:'flex-end',

},


    but:{
        marginTop:60,
        marginRight:140,
        backgroundColor:'rgb(154, 71, 38)',
        borderRadius:20,
        height:40,
        width:120,
      
      
       },
      
       but2:{
          position:'relative',
          marginTop:-40,
          marginRight:140,
          borderRadius:20,
          height:40,
          width:120,
          flexDirection:'row-reverse',
          borderColor: 'rgb(154, 71, 38)',
          borderWidth:1,
          backgroundColor:'rgb(250, 244, 238)',
        
         },
      
       buttext:{
      
       right:50,
       alignItems: "center",  
       color: 'rgb(250, 244, 238)',
       direction: "rtl",
       letterSpacing:0,   
       letterSpacing: 1,
       lineHeight: 35,
       minWidth: 130,
       textAlign: "left",
       fontSize: 18,
      
       },
      
      
       buttext2:{
      
          color:'rgb(154, 71, 38)',
          direction: "rtl",
          letterSpacing:0,   
          letterSpacing: 1,
          lineHeight: 35,
          minWidth: 130,
          fontSize: 18,
          right:50,
         
          }
      



});

export {PrivacyStyle}
