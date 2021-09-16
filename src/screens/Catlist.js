import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  BackHandler,
} from 'react-native';
import {AppColors} from '../theme/themeConfig';
import {connect} from 'react-redux';
import CatCard from '../components/Catcard';

const Catlist = ({navigation, catList}) => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const CatListItemView = (item, index) => {
    return <CatCard item={item} index={index} navigation={navigation} />;
  };

  return catList ? (
    <FlatList
      data={catList}
      keyExtractor={(item, index) => index}
      refreshing={false}
      onRefresh={() => {}}
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>My Cats</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Catform', {title: 'Add a Cat'});
            }}>
            <View style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Add new Cat</Text>
            </View>
          </TouchableOpacity>
        </View>
      }
      stickyHeaderIndices={[0]}
      renderItem={({item, index}) => CatListItemView(item, index)}
    />
  ) : (
    <ActivityIndicator size="large" color="pink" />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: AppColors.WHITE_COLOR,
  },
  headerButton: {
    backgroundColor: AppColors.PINK,
    height: 40,
    width: 100,
    justifyContent: 'center',
    borderRadius: 5,
  },
  headerButtonText: {
    textAlign: 'center',
  },
  headerText: {fontSize: 20},
});

const mapStateToProps = ({appreducer}) => {
  return {
    catList: appreducer.catList,
  };
};

export default connect(mapStateToProps)(Catlist);
