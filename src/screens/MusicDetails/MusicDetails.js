import axios from 'axios';
import React, { useEffect, useLayoutEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import PlayList from '../../components/PlayList';
import { setSongList } from '../store';

const MusicDetails = ({ route, navigation }) => {
  const SongList = useSelector((state) => state.favList.songList);
  const { title, id } = route.params;
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        `https://api.napster.com/v2.2/playlists/${id}/tracks?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=6`
      )
      .then((respo) => {
        dispatch(setSongList(respo.data.tracks));
      });
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title === '' ? 'No title' : title,
    });
  }, [navigation, title]);

  return (
    <SafeAreaView>
      <FlatList
        // style={styles.containerContent}
        data={SongList}
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
    </SafeAreaView>
  );
};

export default MusicDetails;
