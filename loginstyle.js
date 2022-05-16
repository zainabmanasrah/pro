
import { StyleSheet } from 'react-native';
const LoginStyle = StyleSheet.create({

    root:{
        backgroundColor:'#FFFFFF',
        height:1500,
        },
      
      
        Container: {
            alignSelf: "center",
            color: "#9a4726",
            direction: "rtl",
            fontWeight: '700',
            letterSpacing:0,
            lineHeight: 22,
            marginTop: 120,
            minHeight: 102,
            minWidth: 218,
           flexShrink:1,
           flexDirection:'row',
      
        },
        input:{
      borderColor:"#9A4726",
      color:"#666666",
      padding:10,
      borderWidth:1,
      marginLeft:90,
      width:250,
      borderRadius:10,
      backgroundColor:"#FFFFFF",
      height:40,
      textAlign:'right',

      

        },
     
        Text1:{
          marginLeft:240,
          fontSize:22,
          color:"#9A4726",
          marginTop:70,
          marginBottom:20
          
          },
        
        Text:{
          marginLeft:130,
          fontSize:22,
          color:"#9A4726",
          marginTop:70,
          marginBottom:20
          
          },
          image: {
            
            height:250,
            width:413,
           },
      
      });

export { LoginStyle}





