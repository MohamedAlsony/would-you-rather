import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import AvatarIcon from './AvatarIcon'

class Stats extends Component {
	render() {
		const { authed_user } = this.props;

		const { name, answers, avatarURL , questions } = authed_user;

		return (
			<Row className="justify-content-center"> <Col xs={10} md={5}> <Card className="m-3" bg="light">
				<Card.Header> <AvatarIcon avatarURL={avatarURL} className="mr-2" />{name}
				</Card.Header>

				<Card.Body className="d-flex justify-content-center"> <Card.Text>

					<pre>Answered Questions: {Object.keys(answers).length}</pre>
								<br />
					<pre>Created Questions: {questions.length}</pre>
				</Card.Text> </Card.Body>
				<Card.Footer>
					Score: {questions.length + Object.keys(answers).length}
				</Card.Footer> </Card> </Col> </Row>
		)
	}
}
function  mapStateToProps({ users }, { id }){
	return {
		authed_user: users[id]
	};
}
export default connect(mapStateToProps)(Stats);
