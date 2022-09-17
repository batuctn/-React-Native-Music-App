import axios from 'axios';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, FlatList } from 'react-native';

import PlayList from '../../components/PlayList';

const SearchScreenDetails = ({ route, navigation }) => {
  const [genresDetails, setGenresDetails] = useState([]);
  const { name, id } = route.params;
  useEffect(() => {
    axios
      .get(
        `http://api.napster.com/v2.2/genres/${id}/tracks/top?apikey=ZmJjZjAxOGEtYThjYS00ZWM3LWFmZDYtZWFiNjk3ZjhmMTc0&limit=10`
      )
      .then((respo) => {
        setGenresDetails(respo.data.tracks);
      });
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name === '' ? 'No title' : name,
    });
  }, [navigation, name]);
  return (
    <View>
      <FlatList
        data={genresDetails}
        numColumns={1}
        renderItem={({ item }) => (
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

export default SearchScreenDetails;
