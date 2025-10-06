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

export const authVerify = (users: UsersArray, currentUser: AuthData): boolean => {
	const user = users[currentUser.username];

	if (user && user.AuthData.password === currentUser.password) {
		return true;
	}

	return false;
};
