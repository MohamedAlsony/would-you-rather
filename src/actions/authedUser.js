export const log_in = 'log_in';
export const log_out = 'log_out';

export function logIn(id) {
	return {
		type: log_in, id
	};
}
export function logOut(id) {
	return {
		type: log_out
	}
}
