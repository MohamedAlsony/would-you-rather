import React, { Component } from 'react'
import { connect } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row'
import { formatDate } from '../utils/helpers'
import NotFoundPage from './NotFoundPage'
import AvatarIcon from './AvatarIcon'
class AnsweredQuestions extends Component {
	render() {
		const { question, author , authed_user } = this.props;
		if ((question === null)) {
			return <NotFoundPage />;
		}
		const { avatarURL, name } = author;
		const { timestamp, optionOne, optionTwo } = question;
		const total_votes = optionOne.votes.length + optionTwo.votes.length;
		const optionOne_percent = Math.round((optionOne.votes.length / total_votes) * 100);
		const optionTwo_percent = Math.round((optionTwo.votes.length / total_votes) * 100);
		return (
			<Row className="justify-content-center"> <Col xs={10} md={5}> <Card bg="light" className="m-3"> <Card.Header>
							<AvatarIcon avatarURL={avatarURL} className="mr-2" />
							{name}'s asks:
						</Card.Header>
						<Card.Body className="d-flex justify-content-center"> <ul> <li>
									{optionOne.text}

									{optionOne.votes.includes(authed_user) ? (
										<span className="text-danger ml-2">&lt;- Your choice</span>
									) : null}
								</li>
								<ProgressBar now={optionOne_percent} label={`${optionOne_percent}%`} variant="info"/>
								<Card.Text className="text-muted">
									chosen by {optionOne.votes.length} out of {total_votes}{' '} users
								</Card.Text>
								<li>

									{optionTwo.text}

									{optionTwo.votes.includes(authed_user) ? (
										<span className="text-danger ml-2">&lt;- Your choice</span>
									) : null}
								</li>
								<ProgressBar now={optionTwo_percent} label={`${optionTwo_percent}%`} variant="info"/>
								<Card.Text className="text-muted">
									chosen by {optionTwo.votes.length} out of {total_votes}{' '} users
								</Card.Text> </ul> </Card.Body>
						<Card.Footer>
							<p className="text-muted">{formatDate(timestamp)}</p>
						</Card.Footer> </Card> </Col> </Row>
		);
	}
}
function mapStateToProps({ questions, users, authedUser }, { id }) {
	const authed_user = authedUser;
	const question =questions[id];

	return {
		question: question ? question : null, author: question ? users[question.author] : null, authed_user
	};
}
export default connect(mapStateToProps)(AnsweredQuestions);
