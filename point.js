import React, { Component } from 'react'
import {  View,Image,Text,TouchableOpacity,ImageBackground } from 'react-native'
import Position from 'react-native/Libraries/Components/Touchable/Position'
import { PointStyle } from '../styles/pointstyle'
const handleclick = () => {
    console.log("click")
}
const Point = ({navigation}) => {
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
        <View style={PointStyle.root}>

        <Image
          style={PointStyle.image}
          source={require('../assets/points.png')}
        />
        <Text style={PointStyle.Text}> رصيدك من النقاط:</Text>
 <View style={PointStyle.v}>
 <Image
          style={PointStyle.img}
          source={require('../assets/P.png')}
        />
                <View style={{justifyContent:'center',alignItems:'center',position:'absolute'}}>

        <Text style={{fontSize:50,color:"#9A4726",marginTop:30}}>00</Text>
</View>
 </View>

    


        <TouchableOpacity style={{backgroundColor:"#9A4726", paddingVertical:10,marginTop:60,width:170,height:45,marginLeft:120,borderRadius:20}} onPress={handleclick}>
 <Text style={{textAlign:'center',color:"#FFFFFF",borderColor:"#B57A61",fontSize:18}} >استخدم نقاطك</Text>
 </TouchableOpacity>
<View >
    <TouchableOpacity style={{marginTop:110,justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70,backgroundColor:'#FAF4EE'}} activeOpacity = { .5 } onPress={callFun}>
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
    )}
export default Point
