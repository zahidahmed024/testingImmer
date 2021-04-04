import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen'
import LoginScreen from '../screens/LoginScreen'
import CameraTest from '../screens/CameraTest'
import CameraImage from '../screens/CameraImage'
import SetState from '../screens/SetState'
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomAlert from './CustomAlert';
import { AlertHelper } from './AlertHelper';


const MainNavigator = createStackNavigator();
const AppNavigator = () => (
    <SafeAreaProvider>
        <NavigationContainer>
            <StatusBar backgroundColor={'red'} />
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
                <MainNavigator.Screen
                    name={'CameraTest'}
                    component={CameraTest}
                />
                <MainNavigator.Screen
                    name={'CameraImage'}
                    component={CameraImage}
                />
                <MainNavigator.Screen
                    name={'SetState'}
                    component={SetState}
                />
            </MainNavigator.Navigator>
        </NavigationContainer>
        <CustomAlert ref={ref => AlertHelper.setDropDown(ref)} />
    </SafeAreaProvider>
);

export default AppNavigator;
