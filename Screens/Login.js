import { StyleSheet, Text, View, Image } from 'react-native'
import { Input, Button } from 'react-native-elements'
import React from 'react'
import Logo from '../assets/icon.png'

const Login = () => {
	const loginHandler = () => {
		alert('Login')
	}

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={Logo} />
			<View style={styles.form}>
				<Input placeholder="Email Address" onChangeText={(e) => setEmail(e)} />

				<Input
					placeholder="Password"
					secureTextEntry={true}
					onChangeText={(e) => setPassword(e)}
				/>
				<Button
					buttonStyle={styles.loginButton}
					title="Login"
					onPress={loginHandler}
				/>
				<Button
					buttonStyle={styles.registerButton}
					titleStyle={{ color: 'black' }}
					title="Register"
					onPress={() => navigation.navigate('Register')}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		marginTop: 100,
		width: 200,
		height: 180,
		alignSelf: 'center',
		borderRadius: 25,
	},
	form: {
		marginTop: 50,
		margin: 25,
	},
	loginButton: {
		margin: 25,
		backgroundColor: '#d83450',
		fontWeight: 'bold',
	},
	registerButton: {
		margin: 25,
		marginTop: 0,
		backgroundColor: '#F3F3F3',
		fontWeight: 'bold',
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
	},
})

export default Login
