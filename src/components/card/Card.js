import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../card/CardStyles';
const Card = ({ header, title, image }) => {
  return (
    <View style={styles.contain}>
      <Image resizeMode="contain" style={styles.image} source={{ uri: image }} />
      <View style={{ margin: 5 }}>
        <Text numberOfLines={1} style={styles.header}>
          {header}
        </Text>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Card;
