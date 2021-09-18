import { saveQuestion, saveAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
export const get_questions = 'get_questions';
export const post_question = 'post_question';
export const post_answer = 'post_answer';
export function getQuestions(q) {
	return {
		type: get_questions,
		q
	};
}
function postQuestion(q) {
	return {
		type: post_question,
		q
	};
}
function postAnswer({ q_id, answer, authed_user }) {
	return {
		type: post_answer,
		answerInfo: { q_id,
			answer,
			authed_user
		}
	} ;
}
export function handlePostQuestion(option1, option2) {
	return (dispatch,getState) => {
		const authed_user = getState().authedUser;

		dispatch(showLoading()) ;
		return  saveQuestion({
			optionOneText: option1,
			optionTwoText: option2,
			author: authed_user
		}).then((q) => dispatch(postQuestion(q)))
			.then(()   =>   dispatch( hideLoading()))
	};
}
export function handlePostAnswer(q_id,answer) {
	return (dispatch,getState)  =>  {
		const authed_user = getState().authedUser;

		dispatch(showLoading())
		return saveAnswer({
			q_id,
			answer,
			authed_user
		}).then(() =>
				dispatch(
					postAnswer({
						q_id,
						answer,
						authed_user
					})
				)
			).then(() => dispatch(hideLoading()))
	};
}
