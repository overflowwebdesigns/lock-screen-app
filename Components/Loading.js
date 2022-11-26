import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

const Loading = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Loading</Text>
			<ActivityIndicator size="large" color="#d83450" />
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

export default Loading
