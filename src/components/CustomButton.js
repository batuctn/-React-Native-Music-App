import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 300,
        backgroundColor: '#90ee90',
        padding: 14,
        marginTop: 15,
        borderRadius: 20,
        alignItems: 'center',
      }}>
      <Text style={{ fontWeight: '600' }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
