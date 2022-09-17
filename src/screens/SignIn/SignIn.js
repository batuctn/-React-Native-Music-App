import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { auth } from '../../utils/firabase';
import { setUser } from '../store';
import styles from './SignInStyle';
const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('userStorage').then((parserespo) => {
      const parsedata = JSON.parse(parserespo);

      dispatch(
        setUser({
          username: parsedata.username,
          password: parsedata.password,
          email: parsedata.mail,
        })
      );
    });
  }, []);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        AsyncStorage.setItem('userStorage', JSON.stringify(response));
        console.log('response', response);
        dispatch(
          setUser({
            email: response.user.email,
            password: response.user.password,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.safearea}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/174/174872.png',
        }}
        style={{ height: 70, width: 70 }}
      />

      <Text style={styles.maintext}>Millions of songs,{'\n'} Free on Spotify.</Text>
      <CustomInput placeholder="E-mail" value={email} onChangeText={(text) => setEmail(text)} />
      <CustomInput
        value={password}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <CustomButton onPress={handleSignIn} title="Login" />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.text}>Sign Up Free</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;
