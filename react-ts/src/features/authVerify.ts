type UserType = { username: string; password: string };

export const authVerify = (users: UserType[], currentUser: UserType): boolean => {
	const findedUser = users.find((user: UserType) => user.username === currentUser.username);

	if (findedUser && findedUser.password === currentUser.password) {
		return true;
	}

	return false;
};
