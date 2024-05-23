import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react' 
import Header from '../components/Header'
import MyProfile from '../screens/MyProfile'
import ImageSelector from '../screens/ImageSelector'

const Stack = createNativeStackNavigator() 

const MyProfileStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='My Profile'
            screenOptions={{
                header: () => <Header/>
            }}
        > 
        <Stack.Screen name='My Profile' component={MyProfile}/>
        <Stack.Screen name='Image selector' component={ImageSelector}/>
        </Stack.Navigator>
    )
} 

export default MyProfileStackNavigator
