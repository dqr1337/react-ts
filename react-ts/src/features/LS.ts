const LOCAL_STORAGE_KEY = 'usersData';

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

type UsersArray = {
	[username: string]: UserData;
};

const saveToLS = (key: string, value: any) => {
	localStorage.setItem(key, JSON.stringify(value));
};

const getFromLS = (key: string) => {
	const data = localStorage.getItem(key);
	if (!data) return null;

	return JSON.parse(data);
};

export const getUsersData = () => {
	const users = getFromLS(LOCAL_STORAGE_KEY);
	return users;
};

export const getUserTasks = (user: AuthData) => {
	const users = getFromLS(LOCAL_STORAGE_KEY);
	const tasksList = users[user.username].TasksList;
	return tasksList;
};

export const saveUsersTasks = (data: UsersArray) => {
	saveToLS(LOCAL_STORAGE_KEY, data);
};
