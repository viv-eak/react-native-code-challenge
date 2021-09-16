import React, {memo} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {AppColors} from '../theme/themeConfig';
import {
  responsiveVerticalSize,
  responsiveHorizontalSize,
  responsiveFontSize,
  heightPercentageToDP,
} from '../theme/responsiveSize';

const CustomTextInput = ({errorText, ...props}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {Boolean(errorText) && (
      <View style={styles.errorTextContainer}>
        {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: responsiveVerticalSize(0.1),
  },
  input: {
    height: heightPercentageToDP(7.5),
    margin: responsiveHorizontalSize(3),
    textAlign: 'left',
    borderWidth: 1,
    borderColor: AppColors.PINK,
    backgroundColor: AppColors.WHITE_COLOR,
    borderRadius: 4,
    paddingHorizontal: responsiveHorizontalSize(4),
    fontSize: responsiveFontSize(14),
    letterSpacing: 0.52,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginHorizontal: responsiveHorizontalSize(3),
    paddingHorizontal: 4,
  },
  errorTextContainer: {},
});

export default memo(CustomTextInput);
