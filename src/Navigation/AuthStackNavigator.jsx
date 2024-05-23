import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Signup'  
      screenOptions={{
        header: ({ route }) => <Header title={"Bienvenido"} />
      }}
    >
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
