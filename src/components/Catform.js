import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import useForm from '../hooks/useForm';
import CustomTextInput from './CustomTextInput';
import store from '../redux/store';
import {addNewCat, editCat} from '../redux/actions/appActions';
import {AppColors} from '../theme/themeConfig';

const Header = ({label}) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>{label}</Text>
    </View>
  );
};

const Catform = ({catDetails, route, navigation}) => {
  const {inputs, handleInputChange, resetForm} = useForm({
    name: route?.params?.item?.name || '',
    breed: route?.params?.item?.breed || '',
    description: route?.params?.item?.description || '',
    color: route?.params?.item?.color || '',
  });
  const [error, setError] = useState(false);

  const addACat = () => {
    store.dispatch(addNewCat(inputs));
    Alert.alert('Add', 'Cat added successfully.', [
      {text: 'OK', onPress: () => navigation.navigate('Catlist')},
    ]);
  };

  const editACat = () => {
    store.dispatch(editCat({...inputs, index: route?.params?.index}));
    Alert.alert('Edit', 'Cat edited successfully.', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Catlist'),
      },
    ]);
  };

  const handleFieldChange = field => value => {
    if (!value) {
      setError(prev => {
        return {...prev, field: true};
      });
    }
    handleInputChange(field, value);
  };

  function validateForm(inputs) {
    for (let input in inputs) {
      if (!inputs[input]) {
        setError(true);
        return false;
      }
    }
    setError(false);
    return true;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Header label={'Name'} />
        <View style={{margin: 'auto'}}>
          <CustomTextInput
            autoCorrect={false}
            autoFocus={true}
            label="name"
            returnKeyType="next"
            value={inputs.name}
            underlineColorAndroid={'transparent'}
            placeholder="Name"
            errorText={error ? (inputs.name ? '' : 'Name cannot be Empty') : ''}
            onChangeText={handleFieldChange('name')}
          />
        </View>
        <Header label={'Breed'} />
        <View style={{margin: 'auto'}}>
          <CustomTextInput
            autoCorrect={false}
            label="breed"
            returnKeyType="next"
            value={inputs.breed}
            underlineColorAndroid={'transparent'}
            placeholder="Breed"
            errorText={
              error ? (inputs.breed ? '' : 'Breed cannot be Empty') : ''
            }
            onChangeText={handleFieldChange('breed')}
          />
        </View>
        <Header label={'Description'} />
        <View style={{margin: 'auto'}}>
          <CustomTextInput
            autoCorrect={false}
            label="description"
            returnKeyType="next"
            value={inputs.description}
            underlineColorAndroid={'transparent'}
            placeholder="Description"
            onChangeText={handleFieldChange('description')}
            multiline={true}
            errorText={
              error
                ? inputs.description
                  ? ''
                  : 'Description cannot be Empty'
                : ''
            }
            numberOfLines={7}
          />
        </View>
        <Header label={'Color'} />
        <View style={{margin: 'auto'}}>
          <CustomTextInput
            autoCorrect={false}
            label="color"
            returnKeyType="next"
            value={inputs.color}
            underlineColorAndroid={'transparent'}
            placeholder="Color"
            errorText={
              error ? (inputs.color ? '' : 'Color cannot be Empty') : ''
            }
            onChangeText={handleFieldChange('color')}
          />
        </View>

        <View style={styles.submitButtonView}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              if (validateForm(inputs)) {
                if (route?.params?.title === 'Edit a Cat') {
                  editACat();
                } else {
                  addACat();
                }
                resetForm();
              }
            }}>
            <View>
              <Text style={styles.submitButtonText}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerView: {marginHorizontal: 12, marginTop: 5},
  headerText: {fontSize: 18, color: AppColors.PINK},
  submitButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  submitButton: {
    backgroundColor: AppColors.PINK,
    height: 52,
    width: '80%',
    justifyContent: 'center',
    borderRadius: 2,
  },
  submitButtonText: {
    textAlign: 'center',
    fontSize: 22,
    color: AppColors.WHITE_COLORs,
  },
});

export default Catform;
