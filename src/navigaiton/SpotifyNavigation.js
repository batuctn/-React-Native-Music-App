import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import MusicDetails from '../screens/MusicDetails/MusicDetails';
import BottomNavigator from './BottomNavigaiton';

const SpotifyNavigaiton = () => {
  const Spotify = createNativeStackNavigator();

  return (
    <Spotify.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Spotify.Screen name="BottomNavigator" component={BottomNavigator} />
      <Spotify.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#111',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: '#fff',
        }}
        name="MusicDetails"
        component={MusicDetails}
      />
    </Spotify.Navigator>
  );
};

export default SpotifyNavigaiton;
