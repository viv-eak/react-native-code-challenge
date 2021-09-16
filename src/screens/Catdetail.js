import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { AppColors } from '../theme/themeConfig';

const Catdetail = ({route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemView}>
        <Text style={styles.titleText}>Name :</Text>
        <Text style={styles.valueText}>{route?.params?.item?.name}</Text>
      </View>
      <View style={styles.itemView}>
        <Text style={styles.titleText}>Breed :</Text>
        <Text style={styles.valueText}>{route?.params?.item?.breed}</Text>
      </View>
      <View style={styles.itemView}>
        <Text style={styles.titleText}>Description :</Text>
        <Text style={styles.valueText}>{route?.params?.item?.description}</Text>
      </View>
      <View style={styles.itemView}>
        <Text style={styles.titleText}>Color :</Text>
        <Text style={styles.valueText}>{route?.params?.item?.color}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 1,
    backgroundColor: AppColors.WHITE_COLOR,
    margin: 10,
    padding: 15,
  },
  itemView: {borderColor: AppColors.PINK, borderWidth: 1, marginBottom: 5},
  titleText: {
    fontSize: 22,
    textAlign: 'left',
    color: '#E75480',
    marginHorizontal: 10,
  },
  valueText: {
    fontSize: 18,
    textAlign: 'left',
    color: AppColors.PINK,
    marginHorizontal: 10,
  },
});

export default Catdetail;
