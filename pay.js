import React, { Component } from 'react'
import { Text, View,ImageBackground,Image,TextInput,TouchableOpacity } from 'react-native'
import { TransmissionStyle } from '../styles/transmissionstyle'

        const handleclick = () => {
            console.log("click")
          }
          const Pay = ({navigation}) => {
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
                <View style={{ width:400,
                  height:180,}}>
          
              <ImageBackground  source={require('../assets/tr.png')} style={{ width:420,marginTop:1,
          height:170,}}>
           
           
               </ImageBackground>
               <Text style={TransmissionStyle.Text}> الحساب  المراد الدفع له</Text>
           <TextInput style={TransmissionStyle.input} placeholder='كافتيريا جامعة بوليتكنك فلسطين' />
           
           <Text style={{  marginLeft:170,
    fontSize:16,
    color:"#9A4726",
    marginTop:60,
    marginBottom:20,
    marginLeft:220
    }}>  المبلغ  المدفوع</Text>
           <TextInput style={TransmissionStyle.input} placeholder='  ' />
          
          
           <View style={TransmissionStyle.buttons}>
          
          
          <TouchableOpacity style={{backgroundColor:"#9A4726", paddingVertical:10,marginTop:20,width:130,height:45,marginLeft:50,borderRadius:20}} onPress={handleclick}>
          <Text style={{textAlign:'center',color:"white",justifyContent:"space-around",fontSize:20}} >تأكيد</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:"#FAF4EE", paddingVertical:10,marginTop:20,width:130,height:45,marginLeft:40,borderRadius:20}} onPress={handleclick}>
          <Text style={{textAlign:'center',color:"#9A4726",fontSize:20}} >إلغاء</Text>
          </TouchableOpacity>
          </View>
        
<View >
    <TouchableOpacity style={{marginTop:150,justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70,backgroundColor:'#FAF4EE'}} activeOpacity = { .5 } onPress={callFun}>
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
          
                  
              )
            }
          

export default Pay
