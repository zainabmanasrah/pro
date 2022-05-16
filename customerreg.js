import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,TouchableOpacity
} from 'react-native';

import COLORS from '../conts/colors';
import Button from '../component/button';
import Input from '../component/input';
import Loader from '../component/loader';

const CustomerReg = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('الرجاء إدخال الايميل  ', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('الرجاء إدخال ايميل صحيح  ', 'email');
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError('  الرجاء إدخال اسم المستخدم', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('   الرجاء إدخال رقم الهاتف', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError(' الرجاء إدخال كلمة السر', 'password');
      isValid = false;
    } else if (inputs.password.length < 10) {
      handleError('الحد الأدنى لطول كلمة المرور 10', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate('LoginScreen');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.brwon, marginLeft:30,textAlign:'center',fontSize: 30,marginTop:0}}>
     إنشاء حساب للبائع
        </Text>
       
        <View style={{marginVertical: 20}}>
        <Text style={{color:COLORS.brwon,marginLeft:230,fontSize:20,padding:10}}>اسم المستخدم </Text>

          <Input
            onChangeText={text => handleOnchange(text, 'fullname')}
            onFocus={() => handleError(null, 'fullname')}
            iconName="account-outline"
            placeholder="انقر هنا لكتابة اسم المستخدم"
            error={errors.fullname}
          />
<Text style={{color:COLORS.brwon,marginLeft:270,fontSize:20,padding:10}}>رقم الهاتف</Text>

<Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            placeholder="انقر هنا لكتابة رقم الهاتف........."
            error={errors.phone}
          />
          <Text style={{color:COLORS.brwon,marginLeft:300,fontSize:20,padding:10}}>الايميل </Text>

          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            placeholder="انقر هنا لكتابة الايميل............"
            error={errors.email}
          />
<Text style={{color:COLORS.brwon,marginLeft:250,fontSize:20,padding:10}}>رقم الكافتيريا</Text>
<Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            placeholder="انقر هنا لكتابة رقم الكافتيريا ........"
          />
          <Text style={{color:COLORS.brwon,marginLeft:270,fontSize:20,padding:10}}>كلمة السر </Text>

          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            placeholder="  انقر هنا لكتابة كلمة السر "
            error={errors.password}
            password
          />
          <Text style={{color:COLORS.brwon,marginLeft:230,fontSize:20,padding:10}}>تأكيد كلمة السر </Text>

           <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            placeholder="  انقر هنا لتأكيد كلمة السر"
            error={errors.password}
            password
          />
          <Button title="إنشاء حساب" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('LoginScreen')}
            style={{
              color: COLORS.brwon,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
              marginTop:30
            }}>
لديك حساب بالفعل؟ تسجيل الدخول          </Text>
        </View>
      
      </ScrollView>

    </SafeAreaView>
  );
};

export default CustomerReg;