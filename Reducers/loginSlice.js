import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	loading: false,
	error: null,
	userInfo: {
		user: null,
		email: null,
	},
}

//Thunk Request
export const loginRequest = createAsyncThunk('user/getUser', async (data) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}

	const res = await axios.post(
		'/api/users/login',
		{ username: data.username, password: data.password },
		config
	)
	return res.data
})

//Slice/Reducer
const loginSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		logout: (state) => {
			state.loading = false
			state.userInfo.user = null
			state.userInfo.email = null
			state.error = null
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(loginRequest.pending, (state, action) => {
				state.loading = true
			})
			.addCase(loginRequest.fulfilled, (state, action) => {
				state.userInfo = action.payload
				state.loading = false
			})
			.addCase(loginRequest.rejected, (state, action) => {
				state.loading = false
				console.log(action.error)
				state.error = action.error['message']
			})
	},
})

//Export the reducer
export default loginSlice.reducer

//Export actions
export const { logout } = loginSlice.actions

//Declare state selector
export const selectUser = (state) => state.userLogin
