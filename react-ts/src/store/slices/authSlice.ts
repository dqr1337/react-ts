import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type UserType = { username: string; password: string };

type AuthState = {
	isAuthenticated: boolean;
	currentUser: UserType | null;
};

const initialState: AuthState = {
	isAuthenticated: false,
	currentUser: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action: PayloadAction<UserType>) {
			state.isAuthenticated = true;
			state.currentUser = action.payload;
		},
		logout(state) {
			state.isAuthenticated = false;
			state.currentUser = null;
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
