import React, { Component, Fragment } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import { connect } from 'react-redux'
import Tab from 'react-bootstrap/Tab'

import QuestionsList from './QuestionsList'


class HomePage extends Component {
	render() {
		const { answered_questions, unanswered_questions } = this.props;

		return (
			<Fragment> <Tabs>
					<Tab title="Unanswered Questions" eventKey="unanswered">
						<QuestionsList idsList={unanswered_questions} emptyListNote="No more Unswered Questions!  create some new ones! "/>
					</Tab>
					<Tab title="Answered Questions" eventKey="answered">
						<QuestionsList idsList={answered_questions} emptyListNote="No Answered Questions yet!!"/>
					</Tab>
				</Tabs> </Fragment>
		);
	}
}
function mapStateToProps({ authedUser, users, questions }) {
	const authed_user = authedUser;
	const answered_questions = Object.keys(questions)
		.filter((x) => users[authed_user].answers.hasOwnProperty(x))
		.sort((u, v) => questions[v].timestamp - questions[u].timestamp);

	const unanswered_questions = Object.keys(questions)
		.filter((x) => !users[authed_user].answers.hasOwnProperty(x))
		.sort((u, v) => questions[v].timestamp - questions[u].timestamp);

	return {
		answered_questions, unanswered_questions
	};
}
export default connect(mapStateToProps)(HomePage);
