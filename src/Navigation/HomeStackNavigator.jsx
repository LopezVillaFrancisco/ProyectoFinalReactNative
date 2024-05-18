import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Home from '../screens/Home';
import ItemListCategory from '../screens/ItemListCategory';
import ZapatillaDetail from '../screens/ZapatillaDetail';

const Stack = createNativeStackNavigator(); 

const HomeStackNavigator = () => {
  return (
      <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
            headerShown:false}}
    > 
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="ItemListCategory"
          component={ItemListCategory}
        />
        <Stack.Screen
          name="ZapatillaDetail"
          component={ZapatillaDetail}
        />
      </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
