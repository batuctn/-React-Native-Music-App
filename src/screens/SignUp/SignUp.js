import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { auth } from '../../utils/firabase';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [fullname, setFullname] = useState(null);
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password).then((response) => {
      if (response.user) {
        response.user
          .updateProfile({
            displayName: { fullname },
          })
          .then((s) => {
            navigation.navigate('SignIn');
          });
      }
    });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <CustomInput value={email} placeholder="E-mail" onChangeText={(text) => setEmail(text)} />
      <CustomInput
        value={password}
        placeholder="Password at least 6 char"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <CustomInput
        placeholder="Fullname"
        value={fullname}
        onChangeText={(text) => setFullname(text)}
      />
      <CustomButton onPress={handleSignUp} title="Register" />
    </SafeAreaView>
  );
};

export default SignUp;
