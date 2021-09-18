import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import NavBar from './NavBar'
import HomePage from './HomePage'
import NewQuestionPage from './NewQuestionPage'
import Question from './Question'
import LeaderBoardPage from './LeaderBoardPage'
import NotFoundPage from './NotFoundPage'
class RoutingApp extends Component {
	render() {
		return (
			<Router> <Container> <NavBar /> <main> <Switch>
				<Route
					path="/" exact component={HomePage} />
				<Route
					path="/questions/:id" component={Question} />
				<Route
					path="/add" component={NewQuestionPage} />
				<Route
					path="/leaderboard" component={LeaderBoardPage} />
				<Route
					component={NotFoundPage} />
			</Switch> </main> </Container> </Router>
		);
	}
}
export default RoutingApp;
