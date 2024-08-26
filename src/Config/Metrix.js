import {Dimensions, PixelRatio, Platform} from 'react-native';
let {height, width} = Dimensions.get('window');

Dimensions.addEventListener('change', ({window}) => {
  height = window.height;
  width = window.width;
});

height -= Platform.OS == 'ios' ? (20) : 24;

const scale = height / 812;
export const customFontSize = size => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize + 0.5));
};


export const VerticalSize = (size = 812) => (size / 812) * height;
export const HorizontalSize = (size = 375) => (size / 375) * width;

