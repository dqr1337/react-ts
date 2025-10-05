import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type UserType = { username: string; password: string };

type UsersState = {
	users: UserType[];
};

const initialState: UsersState = {
	users: [{ username: 'www', password: 'sss' }],
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser(state: UsersState, action: PayloadAction<UserType>) {
			state.users.push(action.payload);
		},
	},
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
