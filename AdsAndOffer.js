
import {AdsAndOfferStyle} from '../styles/AdsAndOfferStyle'
import React from 'react'
import {View,Text,Image,TextInput, ScrollView,TouchableOpacity} from 'react-native'

const AdsAndOffer = ({navigation}) => {
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
<ScrollView >

<View style={AdsAndOfferStyle.root}>
<Image
  style={AdsAndOfferStyle.image}
  source={require('../assets/ads.png')}
/>

<Text style={{ 
       borderColor: 'rgb(154, 71, 38)',marginLeft:80,padding:8,
       borderWidth:1,marginBottom:50,color:'#9A4726',textAlign:'center',marginTop:140 ,width:250,borderRadius:20,
       height:40,}}>
اشتري أي نوع من أنواع التوست ب ١٠ نقاط

</Text>

<Text style={AdsAndOfferStyle.text}>
وصف العرض

</Text>


<Text style={AdsAndOfferStyle.text}>

وصف العرض
</Text>

<Text style={AdsAndOfferStyle.text}>
وصف العرض
</Text>

<Text style={AdsAndOfferStyle.text}>

وصف العرض
</Text>

<Text style={AdsAndOfferStyle.text}>
وصف العرض

</Text>

</View>

<View >
    <TouchableOpacity style={{justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70,backgroundColor:'#FAF4EE'}} activeOpacity = { .5 } onPress={callFun}>
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
</ScrollView>


)

 }

 export default AdsAndOffer;
