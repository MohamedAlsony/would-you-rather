import React, { Component, Fragment } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import LoginPage from './components/LoginPage'
import RoutingApp from './components/RoutingApp'
import { handleData } from './actions/shared'

class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleData());
	}

	render() {
		const { loadingBar , authed_user } = this.props

		if (loadingBar.default === 1 || loadingBar.default === undefined) {
			return (
				<div
					className="d-flex justify-content-center"> <Spinner animation="border" role="status" variant="secondary" className="my-5"> <span className="sr-only">Loading... please wait!</span>
					</Spinner> </div>
			);
		} else {
			return <Fragment>
				{!authed_user ? <LoginPage /> : <RoutingApp />}
			</Fragment>
		}
	}
}
function mapStateToProps({ loadingBar, authedUser}) {
	const authed_user = authedUser;
	return {
		authed_user, loadingBar
	};
}
export default connect(mapStateToProps)(App)
