import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import Header from '../components/Header';
import CartStackNavigator from './CartStackNavigator';
import OrderStackNavigator from './OrderStackNavigator';


const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route,navigation }) => ({
        header: () => {
          return <Header title={route.name} navigation={navigation} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <BottomTab.Screen
        name="Shop"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
              <Entypo name="shop" size={24} color={focused ? 'black' : 'grey'} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
              <Entypo name="shopping-cart" size={24} color={focused ? 'black' : 'grey'} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Order"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
              <FontAwesome5 name="receipt" size={24} color={focused ? 'black' : 'grey'} />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    height: 60,
    paddingBottom: 10,
    paddingTop: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  iconContainerFocused: {
    backgroundColor: 'lightgrey',
  },
});
