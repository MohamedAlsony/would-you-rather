import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card'

import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import { handlePostAnswer } from '../actions/questions'
import { formatDate } from '../utils/helpers'
import NotFoundPage from './NotFoundPage'
import AvatarIcon from './AvatarIcon'

class UnansweredQuestions extends Component {
	state = {
		error_msg: ''
	};

	handleEvent = (id, ev) => {
		const { dispatch }=this.props;
		const answer=this.form.answer.value;


		ev.preventDefault();
		if (answer !== '' || answer!==null) {
			dispatch(handlePostAnswer(id, answer));
		} else {
			this.setState({ error_msg: 'You should make a choice' });
		}
	};
	render() {
		const { user,question  } = this.props;

		if (question === null || question==='') {
			return <NotFoundPage />;
		}
		const { timestamp,optionOne, optionTwo ,id } = question;
		const { name, avatarURL } = user;
		const { error_msg } = this.state;

		return (
			<Row className="justify-content-center"> <Col xs={12} md={6}> <Card className="m-3" bg="light">
				<Card.Header> <AvatarIcon avatarURL={avatarURL} className="mr-2" /> {name}'s asks:</Card.Header>
						<Card.Body className="d-flex justify-content-center">
							<Form onSubmit={(ev) => this.handleEvent(id, ev)} ref={(f) => (this.form = f)}>{error_msg ? (
								<p className="text-danger">{error_msg } </p> ) : null}
								<Form.Check custom className="mb-2" type="radio" id="optionOne" label={optionOne.text} value="optionOne" name="answer"/>
								<Form.Check custom className="mb-2" type="radio" id="optionTwo" label={optionTwo.text} value="optionTwo" name="answer"/>
								<Button type="submit" variant="light">
									vote
								</Button>
							</Form> </Card.Body> <Card.Footer> <small className="text-muted">{formatDate(timestamp)}</small> </Card.Footer> </Card> </Col> </Row>
		)
	}
}
function mapStateToProps({ users,questions  }, { id }) {
	const question=questions[id]

	return {
		question: question ? question : null, user: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps)(UnansweredQuestions);
