import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import Card from '../../components/card/Card';

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [image, setImage] = useState(null);
  const theme = useSelector((state) => state.theme.activeTheme);

  useEffect(() => {
    axios
      .get(
        'http://api.napster.com/v2.2/playlists/top?apikey=ZmJjZjAxOGEtYThjYS00ZWM3LWFmZDYtZWFiNjk3ZjhmMTc0'
      )
      .then((respo) => {
        setPosts(respo.data.playlists);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        'http://api.napster.com/v2.2/tracks/top?apikey=ZmJjZjAxOGEtYThjYS00ZWM3LWFmZDYtZWFiNjk3ZjhmMTc0&limit=10'
      )
      .then((respo) => {
        setTopTracks(respo.data.tracks);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `http://api.napster.com/v2.2/artists/Art.28463069/images?apikey=ZmJjZjAxOGEtYThjYS00ZWM3LWFmZDYtZWFiNjk3ZjhmMTc0&limit=10`
      )
      .then((respo) => {
        setImage(respo.data.images[0].url);
      });
  }, []);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={theme === 'light' ? styles.container : styles.containerdark}>
      <View>
        <Text style={{ marginTop: 16, padding: 10, fontSize: 21 }}>Spotiy Playlist</Text>
        <FlatList
          horizontal
          style={styles.containerContent}
          data={posts}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              onPress={() =>
                navigation.navigate('MusicDetails', {
                  title: item.name,
                  id: item.id,
                  artistName: item.artistName,
                  time: item.playbackSeconds,
                })
              }
              style={styles.item}>
              <Card image={item.images[0].url} title={item.description} header={item.name} />
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <Text style={{ marginTop: 16, padding: 10, fontSize: 21 }}>Top Tracks</Text>
        <FlatList
          horizontal
          style={styles.containerContent}
          data={topTracks}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              keyExtractor={(item) => item.id}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              // onPress={() => navigation.navigate('MusicDetails', { title: item.title })}
              style={styles.item}>
              <Card image={image} title={item.artistName} header={item.name} />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'flex-start',
  },
  containerdark: {
    flex: 1,
    backgroundColor: '#363636',
    justifyContent: 'flex-start',
  },
  containerContent: {
    margin: 10,
    padding: 10,
  },
  item: {
    margin: 10,
  },
});
