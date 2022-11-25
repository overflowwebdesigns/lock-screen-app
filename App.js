import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

//Import Navigators
import StackNavigator from './Navigators/StackNavigator'

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<StackNavigator />
			</NavigationContainer>
		</SafeAreaProvider>
	)
}
