import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react';
import  { GlobalStyles } from '../globalStyles';
import { VerticalSize } from '../Config/Metrix';
import { places } from '../Config/AppData';
import { Button, PlaceCard } from '../Components';

const Home = ({navigation, route}) => {
  return (
    
    <View style={GlobalStyles.container}>
      <View style={{marginVertical: VerticalSize(20)}}>
          <FlatList 
          showsVerticalScrollIndicator={false}
            data={places}
            renderItem={({item,index})=><PlaceCard onPress={()=>navigation.navigate("PlaceDetails", {identifier: index, from: route?.name })} place={item} />}
          />
      </View>
      <View style={styles.floatingBtn}>
        <Button buttonText={'View Visited Places'} btnStyle={{width: '100%'}} onPress={()=>navigation.navigate("VisitedPlaces")}  />
      </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  floatingBtn: {
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    bottom: VerticalSize(20),
    zIndex: 10
  }
})