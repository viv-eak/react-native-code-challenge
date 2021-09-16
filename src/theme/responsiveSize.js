import {Dimensions, PixelRatio} from 'react-native';


const heightPercentageToDP = heightPercent => {
  const dim = Dimensions.get('screen');
  const screenHeight = dim.height > dim.width ? dim.height : dim.width;
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const responsiveFontSize = fontSize => {
  return PixelRatio.roundToNearestPixel(fontSize / PixelRatio.getFontScale());
};

const responsiveVerticalSize = size => {
  const dim = Dimensions.get('screen');
  const screenHeight = dim.height > dim.width ? dim.height : dim.width;
  const elemHeight = parseFloat(size);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const responsiveHorizontalSize = size => {
  const dim = Dimensions.get('screen');
  const screenWidth = dim.height > dim.width ? dim.width : dim.height;
  const elemHeight = parseFloat(size);
  return PixelRatio.roundToNearestPixel((screenWidth * elemHeight) / 100);
};

export {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveVerticalSize,
  responsiveHorizontalSize,
};
