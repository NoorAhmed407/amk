import React, {memo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {VerticalSize, customFontSize} from '../Config/Metrix';
import {secondary} from '../Config/Colors';
import CardTitleRow from './CardTitleRow';

const PlaceCard = ({place, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image
        resizeMode={'contain'}
        source={{uri: place.imageUrl}}
        style={styles.image}
      />
      <View style={styles.content}>
        <CardTitleRow place={place} />
        <Text style={styles.location}>{place.location}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {place.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(PlaceCard);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: VerticalSize(8),
    marginBottom: VerticalSize(10),
    shadowColor: '#000',
    borderWidth: 1,
    borderColor: secondary,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
  },

  image: {
    height: VerticalSize(200),
  },
  content: {
    padding: VerticalSize(16),
  },

  location: {
    fontSize: 14,
    color: '#888',
    marginBottom: VerticalSize(5),
  },
  description: {
    fontSize: customFontSize(14),
    color: '#444',
  },
});
