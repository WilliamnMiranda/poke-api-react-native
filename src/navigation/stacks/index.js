import React from 'react'
import HomeScreen from '../../pages/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../pages/profile';
export const Stacks = () => {
    const Stack = createNativeStackNavigator();
    const options = {
        title: '',
        headerTransparent: true,
        headerShown: false,
    }
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={options}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={options}
            />
        </Stack.Navigator>
    )
}

export default Stacks