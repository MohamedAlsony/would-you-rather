export const get_users = 'get_users';
export function getUsers(u) {
	return {
		type: get_users,
		u
	};
}
