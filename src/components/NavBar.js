import React, { Fragment } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { connect } from 'react-redux'

import { NavLink, Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav'
import AvatarIcon from './AvatarIcon'
import Button from 'react-bootstrap/Button'
import { logOut } from '../actions/authedUser'


function NavBar(props) {
	const { authed_user, dispatch } = props;
	const handle_logout = () => {
		dispatch(logOut())
	}

	return (
		<Fragment>
			<Navbar variant="light" className="my-3 border" expand="lg" bg="light"> <Navbar.Brand as={Link} to="/">
					<h3> <small>Would you...?</small></h3>
				</Navbar.Brand>

				<Navbar.Toggle  aria-controls="basic-navbar-nav"/> <Navbar.Collapse id="basic-navbar-nav"> <Nav className="mr-auto">
						<Nav.Link
							as={NavLink } to="/"
							exact>
							home
						</Nav.Link>

						<Nav.Link
							as={NavLink} to="/add">
							Create New Question!
						</Nav.Link>

						<Nav.Link
							as={NavLink} to="/leaderboard">
							leader board
						</Nav.Link>

					</Nav> <Nav className="align-items-start"> <Navbar.Text>{authed_user.name}</Navbar.Text>
						<AvatarIcon className="mx-3" avatarURL={authed_user.avatarURL}/>

						<Button className="mt-3 mt-lg-0" variant="light" onClick={handle_logout}
						>
							Log out
						</Button>
					</Nav> </Navbar.Collapse> </Navbar> </Fragment>
	)
}
function mapStateToProps({ authedUser,users }) {
	return {
		authed_user: users[authedUser]
	};
}
export default connect(mapStateToProps)(NavBar);
