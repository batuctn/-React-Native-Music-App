import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CustomButton from '../../components/CustomButton';
import styles from '../Profile/ProfileStyle';
import { logout } from '../store/index';

const Profile = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const theme = useSelector((state) => state.theme.activeTheme);

  return (
    <View style={theme === 'light' ? styles.container_light : styles.container_dark}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://pps.whatsapp.net/v/t61.24694-24/287586372_2086887164806306_7069190412459466430_n.jpg?ccb=11-4&oh=01_AVz1O1WTA6lraPVLiYnamZ7r7f4zt1_uxmPhc760Nc1svg&oe=6334377B',
        }}
      />

      <CustomButton
        title="Theme"
        onPress={() => {
          navigate('Theme');
        }}
      />
      <CustomButton
        title="Edit Profile"
        onPress={() => {
          navigate('EditProfile');
        }}
      />
      <CustomButton
        title="Logout"
        onPress={async () => {
          await AsyncStorage.removeItem('userStorage');
          console.log('basıldı');
          dispatch(logout());
          // navigate('SignIn');
        }}
      />
    </View>
  );
};

export default Profile;
