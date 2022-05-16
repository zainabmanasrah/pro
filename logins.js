import React from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert} from 'react-native';
import COLORS from '../conts/colors';
import Button from '../component/button';
import Input from '../component/input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../component/loader';

const LoginScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({fullname: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.fullname) {
      handleError('الرجاء إدخال اسم المستخدم  ', 'fullname');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('الرجاء إدخال كلمة السر  ', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.fullname == userData.fullname &&
          inputs.password == userData.password
        ) {
          navigation.navigate('Customerhome');
          AsyncStorage.setItem(
            'userData',
            JSON.stringify({...userData, loggedIn: true}),
          );
        } else {
          Alert.alert('Error', 'Invalid Details');
        }
      } else {
        Alert.alert('Error', 'User does not exist');
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
      <View style={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.brwon,marginLeft:10,textAlign:'center',fontSize: 50}}>
تسجيل الدخول        </Text>
        
        <View style={{marginVertical: 20}}>
        <Text style={{color:COLORS.brwon,marginLeft:200,fontSize:20,padding:20}}>اسم المستخدم </Text>

          <Input
 onChangeText={text => handleOnchange(text, 'fullname')}
 onFocus={() => handleError(null, 'fullname')}
 iconName="account-outline"
 placeholder="انقر هنا لكتابة اسم المستخدم"
 error={errors.fullname}
          />
                  <Text style={{color:COLORS.brwon,marginLeft:260,fontSize:20,padding:10}}> كلمة السر </Text>

          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="الرجاء إدخال كلمة السر .......... "
            error={errors.password}
            password
          />
          <Button title="تسجيل الدخول" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('CustomerReg')}
            style={{
              color: COLORS.brwon,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
              marginTop:35
            }}>
ليس لديك حساب؟ سجل          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;