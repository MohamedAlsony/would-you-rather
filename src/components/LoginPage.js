
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

import { logIn } from '../actions/authedUser'


class LoginPage extends Component {
	state = {errorMsg: ''};
	handleEvent = (ev) => {
		const user_id = this.user_id.value;
		const { dispatch } = this.props

		ev.preventDefault()

		if (user_id !== '') {
			dispatch(logIn(user_id));
		} else {
			this.setState({ errorMsg: 'You must choose an account' });
		}
	};

	render() {
		const { errorMsg }=this.state
		const { user_names } = this.props


		return (
			<Row className="justify-content-center align-items-center min-vh-100"> <Col xs={14} md={5}> <Card bg="light" className="text-center">
						<Card.Header>Log in</Card.Header>
						<Card.Body><Form onSubmit={this.handleEvent}>
								<Form.Group controlId="formGridState">
									<Form.Label>Account</Form.Label>
									{errorMsg ? (
										<pre className="text-danger">{errorMsg}</pre> ) : null}
									<Form.Control as="select"
										ref={(x) => (this.user_id = x)}>
										<option
											value="">Select account
										</option>
										{user_names.map((x) => (
											<option value={x.value} key={x.value}>
												{x.label}
											</option>
										))}
									</Form.Control> </Form.Group>
								<Button type="submit" variant="lite">
									Log in
								</Button> </Form> </Card.Body> </Card> </Col> </Row>
		)
	}
}
function mapStateToProps({ users }){
	return {
		user_names: Object.keys(users).map((x) => ({
			value: x,
			label: users[x].name
		}))
	};
}
export default connect(mapStateToProps)(LoginPage);
