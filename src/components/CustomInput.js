import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomInput = ({
  value,
  label,
  left,
  onChangeText,
  disabled,
  placeholder,
  secureTextEntry,
  right,
}) => {
  return (
    <TextInput
      mode="outlined"
      activeOutlineColor="#dfe1e5"
      label={label}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="gray"
      style={styles.textinput}
      left={left}
      disabled={disabled}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      right={right}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textinput: {
    width: 300,
    borderColor: 'gray',
    padding: 10,
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    color: 'white',
  },
});
