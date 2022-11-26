import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

import { logout, pending, clear } from '../Reducers/loginSlice'
import Loading from '../Components/Loading'

const Dashboard = ({ navigation }) => {
	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { loading, error, userInfo } = userLogin

	useEffect(() => {
		dispatch(clear())
		if (!userInfo.email) {
			navigation.navigate('Login')
		}
	}, [userInfo, loading, error])

	const logoutHandler = (e) => {
		e.preventDefault()
		dispatch(pending())
		dispatch(logout())
	}

	return (
		<View style={styles.container}>
			{loading ? (
				<Loading />
			) : (
				<>
					<Text style={styles.text}>Welcome {userInfo.name}</Text>
					<View style={styles.secretData}>
						<Text style={styles.secretText}>Super secret data....</Text>
					</View>
					<View style={styles.buttonContainer}>
						<Button title="Logout" onPress={logoutHandler} />
					</View>
				</>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
	},
	buttonContainer: {
		flex: 1,
		minWidth: '50%',
		alignSelf: 'center',
	},
	secretData: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	secretText: {
		fontSize: 20,
	},
})

export default Dashboard
