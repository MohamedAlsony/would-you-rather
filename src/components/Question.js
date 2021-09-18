import React, { Component, Fragment } from 'react'
import AnsweredQuestions from './AnsweredQuestions'
import { connect } from 'react-redux'
import UnansweredQuestions from './UnansweredQuestions'

class Question extends Component {
	render() {

		const { user_answeres, match }=this.props;


		const id=match.params.id;
		const answered_questions=user_answeres.hasOwnProperty(id) ? true : false;
		return (
			<Fragment>
				<h2 className="text-center my-3"><small>Would You Rather..?</small></h2>
				{answered_questions ? <AnsweredQuestions id={id} /> : <UnansweredQuestions id={id} />}
			</Fragment>
		);
	}
}
function mapStateToProps({ users,authedUser  }) {
	const user_answeres = users[authedUser].answers;

	return {
		user_answeres
	};
}
export default connect(mapStateToProps)(Question);
