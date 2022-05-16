
import {PrivacyStyle} from '../styles/PrivacyStyle'
import React from 'react'
import {View,Text,Image,TouchableOpacity,TextInput} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Privacy = ({navigation}) => {
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

<View style={PrivacyStyle.root}>

<Image
  style={PrivacyStyle.image}
  source={require('../assets/privacy1.png')}
/>


<Text style={PrivacyStyle.text}>
كلمة السر الحالية
</Text>

<TextInput style={PrivacyStyle.inputfield}

        placeholder="كلمة السر الحالية"
secureTextEntry={true}
      />

<Text  
style={PrivacyStyle.text2}>
    كلمة السر الجديدة
</Text>

<TextInput style={PrivacyStyle.inputfield}
secureTextEntry={true}


        placeholder="كلمة السر الجديدة"

      />

<Text style={PrivacyStyle.text1}>
تأكيد كلمة السر الجديدة</Text>

<TextInput style={PrivacyStyle.inputfield}
secureTextEntry={true}

        placeholder="تأكيد كلمة السر الجديدة"

/>

<TouchableOpacity style={PrivacyStyle.but}>
<Text style={PrivacyStyle.buttext}>
حفظ</Text>
</TouchableOpacity>


<TouchableOpacity style={PrivacyStyle.but2}>
<Text style={PrivacyStyle.buttext2}>
إلغاء
</Text>
</TouchableOpacity>

<View >
    <TouchableOpacity style={{marginTop:3,justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70,backgroundColor:'#FAF4EE'}} activeOpacity = { .5 } onPress={callFun}>
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

 export default Privacy;
