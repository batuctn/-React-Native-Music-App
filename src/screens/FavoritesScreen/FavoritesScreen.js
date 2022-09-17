import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import HeaderFav from '../../components/HeaderFav';
import PlayList from '../../components/PlayList';
const FavoritesScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user.user);
  const theme = useSelector((state) => state.theme.activeTheme);
  const likeSongList = useSelector((state) => state.favList.favList);
  console.log(user);
  return (
    <View style={{ backgroundColor: theme === 'light' ? '' : '#363636', flex: 1 }}>
      <HeaderFav
        firstName={user.email}
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
      <Text style={{ fontSize: 25, fontWeight: '600', margin: 10, padding: 10 }}>Liked Songs</Text>
      <FlatList
        // style={styles.containerContent}
        data={likeSongList}
        renderItem={({ item, index }) => (
          <PlayList
            name={item.name}
            albumName={item.albumName}
            artistName={item.artistName}
            id={item.id}
            playbackSeconds={item.playbackSeconds}
          />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
