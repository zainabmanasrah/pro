import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View,ScrollView,Image,ImageBackground,TouchableOpacity} from 'react-native';
import { SellerhomeStyle } from '../styles/sellerhomestyle'

import Button from '../component/button';
const Sellerhomes = ({navigation}) => {
  const callFun = () =>
  {
      navigation.navigate('Qrcode')
  
  
  }
  const callFun2 = () =>
  {
      navigation.navigate('Sellerhome')
  
  
  }
  const callFun3 = () =>
  {
      navigation.navigate('Setting')
  
  
  }
 
const handleclick2 = () => {
    navigation.navigate('AdsAndOffer')

}

const handleclick3 = () => {
    navigation.navigate('Qrcode')

}
const handleclick4 = () => {
    navigation.navigate('Setting')

}

  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('userData');
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };
  const logout = () => {
    AsyncStorage.setItem(
      'userData',
      JSON.stringify({...userDetails, loggedIn: false}),
    );
    navigation.navigate('LoginScreen');
  };

 
  return (
    <ScrollView>
        <View style={SellerhomeStyle.root}>
        <Image style={SellerhomeStyle.img}
           source={require('../assets/ppu.jpeg')}
           />
             
       <View style={SellerhomeStyle.viewtextstyle}>
               <Text style={SellerhomeStyle.text}>{'اسم المستخدم'}</Text>
               <Text style={SellerhomeStyle.texte}>{'رصيدك الحالي '}</Text>
               <Text style={SellerhomeStyle.texts}>{'0000 '}</Text>
       </View>
<View  on
  style={{justifyContent:'center',alignItems:'center',flexDirection:'row',justifyContent:'space-around',marginBottom:40}}>
  
<ImageBackground style={{width:90,height:80}} source={require('../assets/ci.png')}>
    <View>
    <Image style={{width:50,height:50,marginLeft:20,marginTop:10}} 
source={require('../assets/add.png')}
/>
    </View>
    <Text onPress={handleclick2} style={{color:'#9A4726',textAlign:'center',marginTop:15}} > العروض والاعلانات </Text>

</ImageBackground>



</View>
<View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',justifyContent:'space-around',marginBottom:40}}>

<ImageBackground style={{width:90,height:80}} source={require('../assets/ci.png')}>
    <View>
    <Image style={{width:50,height:50,marginLeft:20,marginTop:10}} 
source={require('../assets/qr.png')}
/>
    </View>
        <Text  onPress={handleclick3} style={{color:'#9A4726',textAlign:'center',marginTop:15}} > مسح qr code</Text>

</ImageBackground>


</View>
<View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',justifyContent:'space-around',marginBottom:10}} >
<ImageBackground style={{width:90,height:80}} source={require('../assets/ci.png')}>
    <View>
    <Image   style={{width:45,height:45,marginLeft:20,marginTop:15}} 
source={require('../assets/setti.png')}
/>

    </View>
    <Text  onPress={handleclick4} style={{color:'#9A4726',textAlign:'center',marginTop:15}} > الاعدادت</Text>
</ImageBackground>




</View>
<View >
    <TouchableOpacity style={{marginTop:50,justifyContent:'center',flexDirection:'row',justifyContent:'space-around',borderRadius:20,width:420,height:70,backgroundColor:'#FAF4EE'}} activeOpacity = { .5 } onPress={callFun}>
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
<Button title="Logout" onPress={logout} />

</ScrollView>
)}

export default Sellerhomes;