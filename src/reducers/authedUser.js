import { log_in , log_out } from '../actions/authedUser';
export default function authedUser(state = null,action) {
	switch (action.type) {
		case log_in:
			return action.id;
		case log_out:
			return null;
		default:
			return state;
	}
}
