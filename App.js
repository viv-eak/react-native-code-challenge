/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import {AppColors} from './src/theme/themeConfig';
import Catlist from './src/screens/Catlist';
import Catform from './src/components/Catform';
import Catcard from './src/components/Catcard';
import Catdetail from './src/screens/Catdetail';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Catlist"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: 'pink'},
          }}>
          <Stack.Screen
            name="Catlist"
            component={Catlist}
            options={{
              title: 'Cat List',
            }}
          />
          <Stack.Screen
            name="Catform"
            component={Catform}
            options={({route}) => ({title: route.params.title})}
          />
          <Stack.Screen name="Catcard" component={Catcard} />
          <Stack.Screen
            name="Catdetail"
            component={Catdetail}
            options={{title: 'Cat Detail'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
