import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen'
import LoginScreen from '../screens/LoginScreen'
import { StatusBar } from 'react-native';
const MainNavigator = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <StatusBar backgroundColor={'red'}/>
        <MainNavigator.Navigator
        //  headerMode='none'
         >
            <MainNavigator.Screen
                name={'LandingScreen'}
                component={LandingScreen}
            />
            <MainNavigator.Screen
                name={'LoginScreen'}
                component={LoginScreen}
            />
        </MainNavigator.Navigator>
    </NavigationContainer>
);

export default AppNavigator;
