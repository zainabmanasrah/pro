import {SecondStyle} from '../styles/SecondStyle'
import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
const Second = ({navigation}) => {
  
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
<View style={SecondStyle.root}>

<Image
  style={SecondStyle.d2}
  source={require('../assets/d1.png')}
/>

<Image
  style={SecondStyle.image}
  source={require('../assets/cafe.png')}
/>


<TouchableOpacity style={SecondStyle.but}>
<Text style={SecondStyle.text}>
تسجيل الدخول كزبون 
</Text>
</TouchableOpacity>

<Text style={SecondStyle.Container}>
لا تمتلك حساب ؟ 
<Text style={{fontWeight: '700',textDecorationLine: 'underline'}}>
  إنشاء حساب كزبون 
</Text>

</Text>

<TouchableOpacity
style={SecondStyle.but2}>
<Text style={SecondStyle.text}>
  تسجيل الدخول كبائع 
</Text>
</TouchableOpacity>



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

 export default Second;
