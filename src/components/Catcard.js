import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native';
import {deleteCat} from '../redux/actions/appActions';
import store from '../redux/store';
import {AppColors} from '../theme/themeConfig';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';


const Catcard = ({item, index, updateData, data, navigation}) => {
  const handleDelete = index => {
    const arr = data.filter(function (x, i) {
      return i !== index;
    });
    updateData(arr);
  };

  const delCat = index => {
    Alert.alert('Delete Cat', 'Are you sure you want to delete?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => store.dispatch(deleteCat(index))},
    ]);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Catdetail', {item});
      }}>
      <View style={styles.mainCardView}>
        <View style={styles.detailView}>
          <View style={styles.subCardView}>
            <Icon2 name="cat" size={25} color="black" />
          </View>
          <View style={styles.itemDetailView}>
            <Text numberOfLines={1} style={styles.itemNameText}>
              {item.name}
            </Text>
            <View style={styles.itemBreedView}>
              <Text numberOfLines={2} style={styles.itemBreedText}>
                {item.breed}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Catform', {
                item,
                title: 'Edit a Cat',
                index,
              });
            }}>
            <View style={styles.iconView}>
              <Icon name="brush-outline" size={20} color={AppColors.BLACK} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => delCat(index)}>
            <View style={styles.iconView}>
              <Icon name="trash-outline" size={20} color={AppColors.BLACK} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE_COLOR,
  },
  detailView: {flexDirection: 'row', alignItems: 'center', width: '70%'},
  itemNameText: {
    fontSize: 14,
    color: AppColors.BLACK,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  itemBreedView: {
    marginTop: 4,
    borderWidth: 0,
    width: '85%',
  },
  itemBreedText: {
    color: 'gray',
    fontSize: 12,
  },
  itemDetailView: {marginLeft: 12},
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconView: {
    height: 35,
    width: 35,
    borderRadius: 45,
    marginLeft: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PINK,
  },
  mainCardView: {
    height: 90,
    alignItems: 'center',
    backgroundColor: AppColors.WHITE_COLOR,
    borderRadius: 15,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: AppColors.PINK,
    borderColor: AppColors.PINK,
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Catcard;
