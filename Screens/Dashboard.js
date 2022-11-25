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
			{loading && <Loading />}
			<Text style={styles.text}>Dashboard</Text>
			<Button
				buttonStyle={styles.loginButton}
				title="Logout"
				onPress={logoutHandler}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	text: {
		textAlign: 'center',
	},
})

export default Dashboard
