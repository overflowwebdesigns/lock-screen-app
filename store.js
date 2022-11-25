import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

//Bring in components
import loginSlice from './Reducers/loginSlice'

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
}

const reducer = combineReducers({
	userLogin: loginSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const middleware = [thunk]

const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(...middleware))
)

export const persistor = persistStore(store)
export default store
