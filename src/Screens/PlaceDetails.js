import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GlobalStyles } from '../globalStyles';
import { VerticalSize, customFontSize } from '../Config/Metrix';
import { places } from '../Config/AppData';
import Header from '../Components/Header';
import { Entypo } from '../Config/Icons';
import { primary } from '../Config/Colors';
import { Button } from '../Components';
import CardTitleRow from '../Components/CardTitleRow';
import { useSelector } from 'react-redux';
import Share from 'react-native-share';

const PlaceDetails = ({ route }) => {
  const identifier = route?.params?.identifier;
  const from = route?.params?.from;
  const visitedplaces = useSelector(state=>state?.PlacesReducer?.visitedPlaces);
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(from == 'Home' ? places[identifier] : visitedplaces[identifier]);
  }, []);

  const onShare = ()=>{
    const obj = {title: "Please checkout the event", message: "Check the link", url: `https://www.amktechnology.com/place/${data?.id}`, subject: "Please checkout the event"}
    Share.open(obj)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      err && console.log(err);
    });
  }
 
  return (
    <View style={GlobalStyles.container}>
      <Header title={data?.name} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={{ uri: data?.imageUrl }} style={styles.image} />
          <CardTitleRow place={data} />
        <Text style={styles.location}><Entypo name={'location'} /> {data?.location}</Text>
        <Text style={styles.description}>{data?.description}</Text>
      </ScrollView>
      <Button buttonText={'Share'} onPress={onShare} btnStyle={{marginBottom: VerticalSize(30)}} />
    </View>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  contentContainer: {
    padding: VerticalSize(16),
  },
  rowBtw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: VerticalSize(5)
  },
  name: {
    fontSize: customFontSize(18),
    fontWeight: 'bold',
    color: primary,
    marginBottom: VerticalSize(5),
  },
  image: {
    width: '100%',
    height: VerticalSize(200),
    borderRadius: VerticalSize(8),
    marginBottom: VerticalSize(16),
    resizeMode: 'cover',
  },
  title: {
    fontSize: VerticalSize(24),
    fontWeight: 'bold',
    marginBottom: VerticalSize(8),
  },
  location: {
    fontSize: VerticalSize(16),
    color: '#888',
    marginBottom: VerticalSize(16),
  },
  description: {
    fontSize: VerticalSize(14),
    color: '#444',
    lineHeight: VerticalSize(22),
  },
});
