import React, { Component } from 'react'
import { Text, View,Image,ImageBackground,TextInput,TouchableOpacity,ScrollView } from 'react-native'
import { TransmissionStyle } from '../styles/transmissionstyle'
const handleclick = () => {
  console.log("click")
}


const Withdraw = ({navigation}) => {
  const callFun = () =>
{
    navigation.navigate('Qrcode')


}
const code = () =>
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
        <ScrollView >
      <View >

    <ImageBackground  source={require('../assets/tr.png')} style={{ width:410,
height:190,marginRight:100}}>
 
          
     </ImageBackground>
     <Text style={TransmissionStyle.Text}> الحساب الذي سيتم السحب منه</Text>
 <TextInput style={TransmissionStyle.input} placeholder='حساب الزبون   ' />
 
 

 <View style={TransmissionStyle.buttons}>
 <TouchableOpacity style={{backgroundColor:"#9A4726", paddingVertical:10,marginTop:100,width:130,height:45,marginLeft:30,borderRadius:20}} onPress={handleclick}>
<Text style={{textAlign:'center',color:"white",justifyContent:"space-around",fontSize:20}} >تأكيد</Text>
</TouchableOpacity>
<TouchableOpacity onPressIn={callFun2} style={{backgroundColor:"#FDE9D9", paddingVertical:10,marginTop:100,width:130,height:45,marginLeft:60,borderRadius:20}} onPress={handleclick}>
<Text style={{textAlign:'center',color:"#9A4726",borderColor:"#B57A61",fontSize:20}} >إلغاء</Text>
</TouchableOpacity>

</View>

<View >
    <TouchableOpacity style={{marginTop:190,justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70,backgroundColor:'#FAF4EE'}} activeOpacity = { .5 } onPress={callFun}>
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


export default Withdraw
