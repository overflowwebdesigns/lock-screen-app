import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage } from 'react-native-flash-message'
import { Button, Input } from 'react-native-elements'
import { unlock } from '../Reducers/lockSlice'

const LockScreen = ({ navigation }) => {
	const [pin, setPin] = useState(null)
	const dispatch = useDispatch()

	const lockedState = useSelector((state) => state.lockedState)
	const { locked } = lockedState

	useEffect(() => {
		if (!locked) {
			navigation.navigate('Dashboard')
		}
	}, [locked])

	const handleUnlock = () => {
		getData(pin)
	}
	const getData = async (pin) => {
		try {
			const value = await AsyncStorage.getItem('pin')
			if (value !== null) {
				// value previously stored
				if (value === pin) {
					dispatch(unlock())
				} else {
					showMessage({
						message: 'Incorrect Pin!',
						type: 'info',
						floating: false,
						style: { alignItems: 'center' },
						position: 'top',
					})
				}
			}
		} catch (e) {
			// error reading value
			console.log(e)
		}
	}

	return (
		<View style={styles.container}>
			<Input placeholder="Pin" onChangeText={(e) => setPin(e)} />
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
