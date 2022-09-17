import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider, useSelector } from 'react-redux';

import AuthNavigaiton from './src/navigaiton/AuthNavigation';
import SpotifyNavigaiton from './src/navigaiton/SpotifyNavigation';
import { store } from './src/screens/store';

const Contain = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <NavigationContainer>{user ? <SpotifyNavigaiton /> : <AuthNavigaiton />}</NavigationContainer>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Contain />
    </Provider>
  );
}
export default App;
