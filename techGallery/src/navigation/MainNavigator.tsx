import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GalleryScreen from '../gallery/GalleryScreen';

export type MainStackParamList = {
  Gallery: undefined;
};

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen name="Gallery" component={GalleryScreen} />
    </Main.Navigator>
  );
};

export default MainNavigator;
