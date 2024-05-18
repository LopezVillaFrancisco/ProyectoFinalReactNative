import React from 'react' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import OrderScreen from '../screens/Order';
import OrderDetail from '../screens/OrderDetail';


const Stack = createNativeStackNavigator();

const OrderStackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName='OrderScreen'
    screenOptions={{
          headerShown:false}}
  > 
      <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
      />  
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
      />  
      
    </Stack.Navigator>
  )
}

export default OrderStackNavigator
