import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';

import HomeScreen from '../screens/Home/HomeScreen';
import FavoritesStackScreen from './FavoritesStackScreen';
import SearchStackScreen from './SearchStackScreen';

const BottomTabs = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <BottomTabs.Navigator initialRouteName="Home" barStyle={{ backgroundColor: 'black' }}>
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
          headerShadowVisible: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={`home${focused ? '' : '-outline'}`}
              size={27}
              color="#1DB954"
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
          headerShadowVisible: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name={`search${focused ? '' : '-outline'}`}
              //   color={theme === 'light' ? '#900' : '#9c9c9c'}
              size={27}
              color="#1DB954"
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="FavoritesStackScreen"
        component={FavoritesStackScreen}
        options={{
          tabBarStyle: {
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
          headerShown: false,
          headerShadowVisible: false,
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name={`heart${focused ? '' : '-outline'}`}
              //   color={theme === 'light' ? '#900' : '#9c9c9c'}
              size={27}
              color="#1DB954"
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
