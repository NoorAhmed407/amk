import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { AntDesign } from '../Config/Icons'
import { HorizontalSize, VerticalSize, customFontSize } from '../Config/Metrix'
import { primary } from '../Config/Colors'
import { useNavigation } from '@react-navigation/native'

const Header = ({title}) => {
    const navigation = useNavigation();
  return (
<View style={styles.rowBtw}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
        <AntDesign size={customFontSize(28)} name={'arrowleft'} />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>{title}</Text>
    <View />
</View>
  )
}

export default memo(Header);

const styles = StyleSheet.create({
    rowBtw: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: VerticalSize(20)
      },
      headerTitle: {
        fontSize: customFontSize(18),
        color: primary,
        fontWeight: 'bold',
        marginLeft: HorizontalSize(-10)
      }
})