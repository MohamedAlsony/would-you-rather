import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handlePostQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'



class NewQuestionPage extends Component {
	state = {
		option1: '',
		option2: '',
		to_home: false
	};
	handleChange = (ev) => {
		const name = ev.target.name;
		const value = ev.target.value;
		this.setState({
			[name]: value
		});

	};

	handleEvent = (ev) => {
		const { dispatch } = this.props
		const { option1, option2 } = this.state


		ev.preventDefault();

		this.setState(
			{
				option1: '',
				option2: '',
				to_home: true
			},
			() => dispatch(handlePostQuestion(option1, option2))
		);
	};

	render() {
		const { option1, option2, to_home } = this.state;

		if (to_home === true) return <Redirect to="/" />;
		return (
			<Fragment>
				<h2 className="text-center my-3"> <pre>Would You Rather..?</pre> </h2>
				<Row className="justify-content-center"> <Col xs={12} md={6}> <Card className="m-3 text-center" bg="light">
							<Card.Body>
								<Form onSubmit={this.handleEvent}>
									<Form.Group controlId="option1">
										<Form.Label>Choice 1</Form.Label>
										<Form.Control
											type="text"
											name="option1"
											value={option1}
											onChange={this.handleChange}/>
									</Form.Group>
									<h4><small>OR</small></h4>
									<Form.Group controlId="option2">
										<Form.Label>Choice 2</Form.Label>
										<Form.Control
											type="text"
											name="option2"
											value={option2}
											onChange={this.handleChange}/>
									</Form.Group>
									<Button
										type="submit" variant="light" disabled={option1 === '' || option2 === '' || option1 === option2}>
										Submit
									</Button>
								</Form> </Card.Body> </Card> </Col> </Row>
			</Fragment>
		)
	}
}
export default connect()(NewQuestionPage);
