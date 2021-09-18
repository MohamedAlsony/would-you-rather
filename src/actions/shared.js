import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getData } from '../utils/api';
import { getUsers } from './users';
import { getQuestions } from './questions';
export function handleData() {
	return  (dispatch)  =>  {
		dispatch(showLoading())
		return getData().then(({ users, questions }) => {
			dispatch(getUsers(users));
			dispatch(getQuestions(questions));
			dispatch(hideLoading())
		});
	};
}
