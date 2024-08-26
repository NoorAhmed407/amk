import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../globalStyles'
import { Header, PlaceCard } from '../Components'
import { VerticalSize } from '../Config/Metrix'
import { useSelector } from 'react-redux'

const VisitedPlaces = ({navigation, route}) => {
    const visitedplaces = useSelector(state=>state?.PlacesReducer?.visitedPlaces);
  return (
    <View style={GlobalStyles.container}> 
        <Header title={'Visited Places'} />
        <View style={{marginVertical: VerticalSize(20)}}>
          <FlatList 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: VerticalSize(100)}}
            data={Object.values(visitedplaces)}
            renderItem={({item,index})=><PlaceCard onPress={()=>navigation.navigate("PlaceDetails", {identifier: item?.id, from : route?.name})} place={item} />}
            ListEmptyComponent={<Text style={{textAlign: 'center'}}>No Item Found...</Text>}
          />
      </View>
    </View>
  )
}

export default VisitedPlaces

const styles = StyleSheet.create({})