import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type AuthData = {
	username: string;
	password: string;
};

type Task = {
	id: number;
	text: string;
	isCompleted: boolean;
};

type UserData = {
	AuthData: AuthData;
	TasksList: Task[];
};

type User = {
	[username: string]: UserData;
};

type UsersState = {
	users: {
		[username: string]: UserData;
	};
};

const initialState: UsersState = {
	users: {},
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser(state: UsersState, action: PayloadAction<AuthData>) {
			const newUser = action.payload.username;

			state.users[newUser] = {
				AuthData: action.payload,
				TasksList: [],
			};
		},
		setUsersData(state: UsersState, action: PayloadAction<User>) {
			state.users = action.payload ? action.payload : {};
		},
		updateUserTasks(state: UsersState, action: PayloadAction<{ currentUser: { username: string; password: string }; tasks: Task[] }>) {
			state.users[action.payload.currentUser.username].TasksList = action.payload.tasks;
		},
	},
});

export const { addUser, setUsersData, updateUserTasks } = usersSlice.actions;
export default usersSlice.reducer;
