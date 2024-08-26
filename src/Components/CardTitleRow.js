import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome } from '../Config/Icons';
import PlacesActions from '../Redux/Actions/PlacesAction';
import { VerticalSize, customFontSize } from '../Config/Metrix';
import { primary } from '../Config/Colors';

const CardTitleRow = ({place}) => {

  const visitedplaces = useSelector(state=>state?.PlacesReducer?.visitedPlaces);
  const dispatch = useDispatch();


  const addRemoveVisited = ()=>{
    let visitedPlacesCopy = {...visitedplaces};
    if(visitedPlacesCopy[place?.id]){
      delete visitedPlacesCopy[place?.id];
    }
    else{
      visitedPlacesCopy[place?.id] = place;
    }
    dispatch(PlacesActions.UpdatePlaces(visitedPlacesCopy));
  }

  return (
    <View style={styles.rowBtw}>
    <Text style={styles.name}>{place?.name}</Text>
    <TouchableOpacity onPress={addRemoveVisited}>
        <FontAwesome name={visitedplaces[place?.id] ? 'bookmark' : 'bookmark-o'}  size={customFontSize(28)} color={primary} />
    </TouchableOpacity>
  </View>
  )
}

export default memo(CardTitleRow);

const styles = StyleSheet.create({
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
});