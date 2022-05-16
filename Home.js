import React from 'react'
import { HomeStyle } from '../styles/HomeStyle'//import external stylesheet file 
import {Image,View,Text,TextInput,} from 'react-native'//import image ,view ,text component from react native 
// define function called home which is return the shown component.

const Home = () => {
return (
<View style={HomeStyle.root}>

<Image
  style={HomeStyle.image}
  source={require('../assets/cafe.png')}
/>

<Text style={{textAlign:'right',color:'#9A4726',fontSize:18,marginTop:50,marginRight:20}}>
 شكرا لك على استخدام تطبيقنا ❤️.
 {"\n"}
 {"\n"}

نأمل أن نجعل تجربتك أكثر راحة وأسرع عند الشراء من
{"\n"}

  كافيتريا جامعتنا.
{"\n"}
{"\n"}

ابق معنا لتحصل على الكثير من العروض و
لاستخدام ميزة النقاط الرائعة.
{"\n"}

{"\n"}
كل جيدًا ، اعتني بنفسك واحصل على
الكثير من الذكريات السعيدة.</Text>
</View>
)

 }

 export default Home;
