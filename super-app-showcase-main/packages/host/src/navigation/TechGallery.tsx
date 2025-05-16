import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBar from '../components/NavBar';
import TechGalleryScreen from '../screens/TechGalleryScreen';

export type TechGalleryStackParamList = {
  TechGallery: undefined;
};

const Home = createNativeStackNavigator<TechGalleryStackParamList>();

const TechGalleryNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        header: NavBar,
      }}>
      <Home.Screen name="TechGallery" component={TechGalleryScreen} />
    </Home.Navigator>
  );
};

export default TechGalleryNavigator;
