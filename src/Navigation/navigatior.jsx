import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { getSession } from '../db';
import { setUser } from '../Features/User/userSlice';

const Navigator = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth.value);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getSession();
      if (response.rows._array.length > 0) {
        const user = response.rows._array[0];  
        dispatch(setUser({
          email: user.email,
          localId: user.localId,
          idToken: user.idToken,
        }));
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Navigator;
