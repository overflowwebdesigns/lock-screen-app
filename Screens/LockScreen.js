import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { unlock } from '../Reducers/lockSlice'

const LockScreen = ({ navigation }) => {
	const dispatch = useDispatch()

	const lockedState = useSelector((state) => state.lockedState)
	const { locked } = lockedState

	useEffect(() => {
		if (!locked) {
			navigation.navigate('Dashboard')
		}
	}, [locked])

	const handleUnlock = () => {
		dispatch(unlock())
	}
	return (
		<View style={styles.container}>
			<Button title="Unlock" onPress={handleUnlock} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
})

export default LockScreen
