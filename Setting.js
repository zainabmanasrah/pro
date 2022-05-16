
import {Settingstyle} from '../styles/SettingStyle'
import React from 'react'
import {View,Text,Image,ImageBackground,TouchableOpacity,ScrollView} from 'react-native'


const Setting = ({navigation}) => {
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
const callFun4 = () =>
{
    navigation.navigate('Helpcenter')


}
const callFun5 = () =>
{
    navigation.navigate('Privacy')


}
return (
  <ScrollView>

<View style={Settingstyle.root}>

<Image
  style={Settingstyle.image}
  source={require('../assets/set.png')}
/>


<Text onPress={callFun4} style={Settingstyle.text}>
مركز المساعدة
</Text>

<Text onPress={callFun5} 
style={Settingstyle.text2}>
الامان و الخصوصية

</Text>

<Text 

style={Settingstyle.text3}>
تسجيل الخروج

</Text>

<View >
    <TouchableOpacity style={{marginTop:80,justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70,backgroundColor:'#FAF4EE'}} activeOpacity = { .5 } onPress={callFun}>
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

 export default Setting;
