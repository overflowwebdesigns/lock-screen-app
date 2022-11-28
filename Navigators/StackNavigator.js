import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../Screens/Login'
import Dashboard from '../Screens/Dashboard'
import LockScreen from '../Screens/LockScreen'
import { StyleSheet } from 'react-native'

const StackNavigator = () => {
	const Stack = createStackNavigator()

	return (
		<Stack.Navigator initialRouteName="Login">
			<Stack.Screen
				name="Login"
				options={{
					headerShown: true,
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#d83450' },
				}}
				component={Login}
			/>
			<Stack.Screen
				name="Dashboard"
				options={{
					headerShown: true,
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#d83450' },
					headerLeft: () => null,
				}}
				component={Dashboard}
			/>
			<Stack.Screen
				name="LockScreen"
				options={{
					headerShown: false,
					gestureEnabled: false,
				}}
				component={LockScreen}
			/>
		</Stack.Navigator>
	)
}

const styles = StyleSheet.create({
	buttonStyle: {
		backgroundColor: '#d83450',
	},
})

export default StackNavigator
