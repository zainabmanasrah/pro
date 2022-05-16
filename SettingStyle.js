import { StyleSheet } from 'react-native';
const Settingstyle = StyleSheet.create({

root:{
  backgroundColor:'#FFFFFF',
  display: "flex",
  flexDirection: 'column',
  alignItems:'center',
  minHeight:926,
  width: 428,
  
  },

text: {
   marginTop: 300,
   color:'rgb(154, 71, 38)',
   fontWeight: '700',
   height: 61,
   width: 300,  
   fontSize: 17,
   lineHeight: 50,
   backgroundColor:'rgb(250, 244, 238)',
   shadowColor:'rgb(154, 71, 38)',
   textAlign: 'center',

    
},


text2: {
   textAlign: 'center',
    marginTop: 60,
    color:'rgb(154, 71, 38)',
    fontWeight: '700',
    height: 61,
    width: 300,  
    fontSize: 17,
    lineHeight: 50,
    backgroundColor:'rgb(250, 244, 238)',
    elevation: 20,
    shadowColor:'rgb(154, 71, 38)',
    
   
 
 },

 text3: {
   textAlign: 'center',
    marginTop: 60,
    color:'rgb(154, 71, 38)',
    fontWeight: '700',
    height: 61,
    width: 300,  
    fontSize: 17,
    lineHeight: 50,
    backgroundColor:'rgb(250, 244, 238)',
    paddingHorizontal:20,
    elevation: 20,
    shadowColor:'rgb(154, 71, 38)',
  

 },

    image: {
        display:"flex",
        flexDirection:'column',
        alignItems:'center',
        height:238,
        width:450,
        position:'absolute',
        alignItems:'flex-start',
  
        },
     
      
         

    
    
     
            

});

export {Settingstyle}
