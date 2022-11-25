import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../Screens/Login'

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
		</Stack.Navigator>
	)
}

export default StackNavigator
