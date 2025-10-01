type UserType = { username: string; password: string };

export const authVerify = (users: UserType[], isLoggedIn: boolean, currentUser: UserType): boolean => {
	// if (isLoggedIn) {
	// 	return false;
	// }

	const findedUser = users.find((user: UserType) => user.username === currentUser.username);

	if (findedUser && findedUser.password === currentUser.password) {
		return true;
	}

	return false;
};
