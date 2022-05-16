import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import COLORS from '../conts/colors';
const Button = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{backgroundColor:"#9A4726",marginTop:30,width:160,height:45,marginLeft:120,borderRadius:20
      }}>
      <Text style={{color: COLORS.white, fontSize: 18,marginLeft:25,marginTop:10}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;