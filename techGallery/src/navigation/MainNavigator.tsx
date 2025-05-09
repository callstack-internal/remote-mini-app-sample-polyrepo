import React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GalleryScreen from '../gallery/GalleryScreen';

export type MainStackParamList = {
  Gallery: undefined;
};

const MainStackNavigator = createNativeStackNavigator({
  screens: {
    Gallery: GalleryScreen,
  },
});
const AppNavigator = createStaticNavigation(MainStackNavigator);

const MainNavigator = () => {
  return <AppNavigator />;
};

export default MainNavigator;
