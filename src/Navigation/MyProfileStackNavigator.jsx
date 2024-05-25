import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react' 
import MyProfile from '../screens/MyProfile'
import ImageSelector from '../screens/ImageSelector'

const Stack = createNativeStackNavigator() 

const MyProfileStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='My Profile'
        > 
        <Stack.Screen name='My Profile' component={MyProfile} options={{ headerShown: false }}/>
        <Stack.Screen name='Image selector' component={ImageSelector} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
} 

export default MyProfileStackNavigator
