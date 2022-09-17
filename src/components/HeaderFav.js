import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { View, Text, Image } from 'react-native';
const HeaderFav = ({ firstName, onPress }) => {
  return (
    <View
      style={{
        marginTop: 25,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Image
        style={{ borderRadius: 25 }}
        source={{
          uri: 'https://pps.whatsapp.net/v/t61.24694-24/287586372_2086887164806306_7069190412459466430_n.jpg?ccb=11-4&oh=01_AVz1O1WTA6lraPVLiYnamZ7r7f4zt1_uxmPhc760Nc1svg&oe=6334377B',
          width: 50,
          height: 50,
        }}
      />
      <Text style={{ fontSize: 23 }}>{firstName}</Text>
      <Ionicons
        style={{ marginRight: 15 }}
        onPress={onPress}
        name="settings"
        color="#1DB954"
        size={30}
      />
    </View>
  );
};

export default HeaderFav;
