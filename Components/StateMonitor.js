import React, { useState, useEffect, useRef } from 'react'
import { AppState, Text } from 'react-native'

const StateMonitor = () => {
	const appState = useRef(AppState.currentState)
	const [appStateVisible, setAppStateVisible] = useState(appState.current)

	useEffect(() => {
		const subscription = AppState.addEventListener('change', (nextAppState) => {
			if (
				appState.current.match(/inactive|background/) &&
				nextAppState === 'active'
			) {
				console.log('App has come to the foreground!')
			}

			appState.current = nextAppState
			setAppStateVisible(appState.current)
			console.log('AppState', appState.current)
		})

		return () => {
			subscription.remove()
		}
	}, [])

	return <Text>App is {appStateVisible}</Text>
}

export default StateMonitor
