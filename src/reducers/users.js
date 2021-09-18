import { get_users } from '../actions/users';
import { post_question, post_answer } from '../actions/questions';
export default function users(state = {},action) {
	switch (action.type) {
		case get_users:
			return {
				...state,
				...action.u
			};
		case post_question:
			return {
				...state,
				[action.q.author]: {
					...state[action.q.author],
					questions: state[action.q.author].questions.concat([
						action.q.id
					])
				}
			};
		case post_answer:
			const { q_id, answer, authed_user } = action.answerInfo;
			return {
				...state,
				[authed_user]: {
					...state[authed_user],
					answers: {
						...state[authed_user].answers,
						[q_id]: answer
					}
				}
			};
		default:
			return state;
	}
}
