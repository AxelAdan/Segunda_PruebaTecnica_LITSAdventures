import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AsignacionSSScreen } from '../screens/AsignacionSSScreen';

const RootStack = createStackNavigator();

function RootStackScreen() {
    return (
        <RootStack.Navigator>
            <RootStack.Group>
                <RootStack.Screen name="Login" component={HomeScreen} options={{ headerShown: false }} />
                <RootStack.Screen name="AsignacionSS" component={AsignacionSSScreen} options={{ headerShown: false }} />
            </RootStack.Group>
        </RootStack.Navigator>
    );
};

export const AppNavigator = () => (
    <NavigationContainer>
        <RootStackScreen />
    </NavigationContainer>
);
