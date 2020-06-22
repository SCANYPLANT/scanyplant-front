import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { HomeScreen, LoginScreen, RegisterScreen } from '../views';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const isSignedIn = false;

export default function Navigation() {
	return (
		<NavigationContainer>
			{
				isSignedIn ? (
					<>
						<Tab.Navigator
							initialRouteName="Home"
							screenOptions={({ route }) => ({
								tabBarIcon: ({ focused, color, size }) => {
									let iconName;
									if (route.name === 'Home') {
										iconName = focused ? 'ios-home' : 'ios-home';
									} else if (route.name === 'Login') {
										iconName = focused ? 'md-person' : 'md-person';
									} else if (route.name === 'Register') {
										iconName = focused ? 'md-person-add' : 'md-person-add';
									}
									return <Ionicons name={iconName} size={size} color={color}/>;
								},
								tabBarVisible: true,
							})}
							tabBarOptions={{
								activeTintColor: '#ffffff',
								inactiveTintColor: '#ffffff',
								inactiveBackgroundColor: '#22577A',
								activeBackgroundColor: '#29668f',
							}}
						>
							<Tab.Screen name="Home" component={HomeScreen}/>
						</Tab.Navigator>
					</>
				) : (
					<>
						<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Register'}>
							<Stack.Screen name="Login" component={LoginScreen}/>
							<Stack.Screen name="Register" component={RegisterScreen}/>
						</Stack.Navigator>
					</>
				)
			}
		</NavigationContainer>
	);
}
