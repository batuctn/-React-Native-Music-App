import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';

import PlayList from '../../components/PlayList';

const SearchScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [response, setResponse] = useState([]);
  const [genres, setGenres] = useState([]);
  const [condition, setCondition] = useState(false);
  const theme = useSelector((state) => state.theme.activeTheme);
  useEffect(() => {
    axios
      .get(
        'http://api.napster.com/v2.2/genres?apikey=ZmJjZjAxOGEtYThjYS00ZWM3LWFmZDYtZWFiNjk3ZjhmMTc0&limit=10'
      )
      .then((respo) => {
        setGenres(respo.data.genres);
      });
  }, []);

  return (
    <View style={{ backgroundColor: theme === 'light' ? null : '#363636' }}>
      <TextInput
        onFocus={() => {
          setCondition(true);
          console.log('focus olundu');
        }}
        right={
          <TextInput.Icon
            size={30}
            name="magnify"
            onPress={async () => {
              await axios
                .get(
                  `${'http://api.napster.com/v2.2/search/verbose?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&per_type_limit=5&query='}` +
                    `${search}` +
                    `${'&type=track'}`
                )
                .then((respo) => {
                  setResponse(respo.data.search.data.tracks);
                  console.log('response', response);
                });
            }}
          />
        }
        value={search}
        placeholder="Search"
        onChangeText={(text) => setSearch(text)}
        activeOutlineColor="blue"
        activeUnderlineColor="#1DB954"
      />

      {condition === false ? (
        <>
          <Text style={{ margin: 10, textAlign: 'left', fontSize: 30 }}>Genres</Text>
          <FlatList
            data={genres}
            numColumns={3}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  keyExtractor={(item) => item.id}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  onPress={() =>
                    navigation.navigate('SearchScreenDetails', { id: item.id, name: item.name })
                  }>
                  <View
                    style={{
                      borderWidth: 1,
                      margin: 10,
                      padding: 10,
                      height: 100,
                      width: 100,
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#111',
                    }}>
                    <Text style={{ color: '#fff' }}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </>
      ) : (
        <FlatList
          data={response}
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
      )}
    </View>
  );
};

export default SearchScreen;
