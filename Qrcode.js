
import {QrcodeStyle} from '../styles/QrcodeStyle'
import React from 'react'
import {View,Text,Image,TouchableOpacity,TextInput,ImageBackground,ScrollView} from 'react-native'

const Qrcode = ({navigation}) => {
  const n = () =>
  {
      navigation.navigate('Transmision') 
      
      
    
  
  
  }
  const callFun = () =>
{
    navigation.navigate('Qrcode')


}
const callFun2 = () =>
{
    navigation.navigate('Customerhome')


}
const callFun3 = () =>
{
    navigation.navigate('Setting')


}
return (
  <ScrollView>

<View style={QrcodeStyle.root}>

<Image
  style={QrcodeStyle.image}
  source={require('../assets/qrc.png')}
/>
<Text style={QrcodeStyle.text}>
الكود الخاص بك </Text>

<View  style={QrcodeStyle.qrcodebackgroung}>
<Image 
  style={QrcodeStyle.qrcode}
  source={require('../assets/qrcode.png')}
/>
</View>



<TouchableOpacity onPress={n} style={QrcodeStyle.but}>
<Text style={QrcodeStyle.buttext}>
مسح QR Code</Text>
</TouchableOpacity>

<View >
    <TouchableOpacity style={{marginTop:40,justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70,backgroundColor:'#FAF4EE'}} activeOpacity = { .5 } onPress={callFun}>
        <Image source={require('../assets/qr.png')}
        style={{width:50,height:50,marginRight:250,marginTop:0}}
/>

    </TouchableOpacity>
    <TouchableOpacity style={{justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70}} activeOpacity = { .5 } onPress={callFun2}>
        <Image source={require('../assets/home.png')}
        style={{width:40,height:40,marginLeft:20,marginTop:-65}}
/>

    </TouchableOpacity>
    <TouchableOpacity style={{justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70}} activeOpacity = { .5 } onPress={callFun3}>
        <Image source={require('../assets/setti.png')}
        style={{width:40,height:40,marginLeft:250,marginTop:-135}}
/>

    </TouchableOpacity>
</View>
</View>

  </ScrollView>
)

 }

 export default Qrcode;
