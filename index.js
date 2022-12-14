import React from 'react'
import { registerRootComponent } from 'expo'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import FlashMessage from 'react-native-flash-message'

//Bring in components
import App from './App'
import Loading from './Components/Loading.js'
import store, { persistor } from './store'

const index = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={<Loading />} persistor={persistor}>
				<App />
				<FlashMessage position="bottom" />
			</PersistGate>
		</Provider>
	)
}

export default registerRootComponent(index)
