import { _saveQuestionAnswer, _getUsers, _getQuestions, _saveQuestion } from './_DATA.js';

export function getData() {
	return  Promise.all([_getUsers(),_getQuestions()])
		.then(([users,questions]) => ({
		users, questions
	}))
 }
export function saveQuestion(q) {
	return _saveQuestion(q);
}
export function saveAnswer(data) {
	return _saveQuestionAnswer(data);
}
