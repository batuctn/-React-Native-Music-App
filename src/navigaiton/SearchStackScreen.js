import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';

import SearchScreen from '../screens/Search/SearchScreen';
import SearchScreenDetails from '../screens/SearchScreenDetails/SearchScreenDetails';

const Stack = createNativeStackNavigator();
const SearchStackScreen = () => {
  const theme = useSelector((state) => state.theme.activeTheme);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme === 'light' ? null : '#363636',
        },
        headerTitleStyle: {
          color: theme === 'light' ? '#900' : '#cfcfcf',
        },
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SearchScreen"
        component={SearchScreen}
      />
      <Stack.Screen
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
        name="SearchScreenDetails"
        component={SearchScreenDetails}
      />
    </Stack.Navigator>
  );
};

export default SearchStackScreen;
