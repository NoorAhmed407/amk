import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { primary, white } from '../Config/Colors';
import { HorizontalSize, VerticalSize, customFontSize } from '../Config/Metrix';


function Button({
  buttonText = "",
  textStyle = {},
  btnStyle = {},
  onPress = () => { },
  shadow = false,
  disabled = false,
  preIcon = null,
  postIcon = null
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled}
      style={
        shadow ? { ...styles.buttonStyle, ...styles.btnShadow, ...btnStyle } : { ...styles.buttonStyle, ...btnStyle }
      }
      onPress={onPress}
    >
      {preIcon}
      <Text style={{ ...styles.btnTextStyle, ...textStyle }}>{buttonText}</Text>
      {postIcon}
    </TouchableOpacity>
  )
}

export default memo(Button);

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    paddingHorizontal:  HorizontalSize(12),
    paddingVertical:  VerticalSize(16),
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary
  },
  btnShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 10,
  },

  btnTextStyle: {
    fontSize:  customFontSize(18),
    color:   white,
    fontWeight: 'bold'
  },
});