
import {Helpcenterstyle} from '../styles/Helpcenterstyle'
import React from 'react'
import {View,Text,Image,TouchableOpacity,TextInput,ScrollView} from 'react-native'

const Paybypoint = ({navigation}) => {
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

<View style={Helpcenterstyle.root}>

<Text style={{color:'#9A4726',width:180,padding:10,height:40,backgroundColor:'#FAF4EE',marginTop:60}}>
    رصيدك الحالي من النقاط:00
</Text>
<Text style={{color:'#9A4726',marginTop:60}}>
حدد ما تريد شرائه باستخدام نقاطك من خلال هذه القائمة:
</Text>
<TouchableOpacity style={Helpcenterstyle.but}>

</TouchableOpacity>
<Text style={Helpcenterstyle.buttext}>
إرسال</Text>

<View >
    <TouchableOpacity style={{marginTop:130,justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70,backgroundColor:'#FAF4EE'}} activeOpacity = { .5 } onPress={callFun}>
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

 export default Paybypoint;
