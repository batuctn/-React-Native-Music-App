import Entypo from '@expo/vector-icons/Entypo';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { setFav, setUnFav } from '.././screens/store/index';

const PlayList = ({ name, artistName, albumName, id }) => {
  const likeSongList = useSelector((state) => state.favList.favList);
  const heart = <Entypo name="heart" color="#1DB954" size={23} />;
  const heartOut = <Entypo name="heart-outlined" color="#1DB954" size={23} />;
  const dispatch = useDispatch();
  const unlikeSongs = likeSongList.some((some) => some.valueId === id);
  const likeSong = () => {
    dispatch(setFav({ albumName, artistName, name, valueId: id }));
  };
  const unLikeSong = () => {
    dispatch(setUnFav(id));
  };
  console.log('likeSongList', likeSongList);
  return (
    <View style={styles.contain}>
      <View>
        <Text style={{ color: '#1DB954' }}>Album:{albumName}</Text>
        <Text style={{ color: '#1DB954' }}>Song Name:{name}</Text>
        <Text style={{ color: '#1DB954' }}>Artist:{artistName}</Text>
      </View>
      <View>
        {unlikeSongs ? (
          <TouchableOpacity onPress={unLikeSong}>{heart}</TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={likeSong}>{heartOut}</TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default PlayList;

const styles = StyleSheet.create({
  contain: {
    backgroundColor: '#111',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
