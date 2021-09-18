import { get_questions, post_question, post_answer } from '../actions/questions';
export default function questions(state = {},action) {
	switch (action.type) {
		case get_questions:
			return {
				...state,
				...action.q
			};
		case post_question:
			return {
				...state,
				[action.q.id]: action.q
			};
		case post_answer:
			const { q_id, answer, authed_user } = action.answerInfo;

			return {
				...state,
				[q_id]: {
					...state[q_id],
					[answer]: {
						...state[q_id][answer],
						votes: state[q_id][answer].votes.concat([authed_user])
					}
				}
			};
		default:
			return state;
	}
}
