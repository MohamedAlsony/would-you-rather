import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AvatarIcon from './AvatarIcon'
import { formatDate } from '../utils/helpers'



class Questions extends Component {

	render() {
		const { author, question  } = this.props;
		const { avatarURL,name } = author;
		const { optionOne, optionTwo, timestamp, id } = question;



		return (

			<Row className="justify-content-center"> <Col xs={10} md={5}> <Card bg="light" className="m-3">
				<Card.Header>< AvatarIcon avatarURL={avatarURL} className="mr-2" /> {name}'s asks: </Card.Header>
						<Card.Body className="text-center"> <Card.Text>{optionOne.text.slice(0, 46)}...?</Card.Text>
							<Link to={`/questions/${ id }`}>
								<Button>View Question</Button>
							</Link> </Card.Body>
						<Card.Footer>
							<p className="text-muted">{formatDate(timestamp)}</p>
						</Card.Footer> </Card> </Col> </Row>
		);
	}
}
function mapStateToProps({ users,questions }, { id }) {
	const question=questions[id]
	return {
		author: question ? users[question.author] : null, question: question ? question : null

	};
}
export default connect(mapStateToProps)(Questions);
