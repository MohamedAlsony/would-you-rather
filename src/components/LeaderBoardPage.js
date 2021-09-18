import React, { Component, Fragment } from 'react'

import Stats from './Stats'
import { connect } from 'react-redux'
class LeaderBoardPage extends Component {
	render() {

		return (
			<Fragment> <h3 className="text-center my-3">LeaderBoard</h3>
				{this.props.user_ids.map((x) => (
					<Stats key={x} id={x}/>
				))}
			</Fragment>
		)
	}
}
function  mapStateToProps({ users }) {

	const sorted_ids = Object.keys(users).sort((id1 , id2) => {
		const score1 =Object.keys(users[id1].answers).length + users[id1].questions.length;
		const score2 =Object.keys(users[id2].answers).length + users[id2].questions.length;

		return score2 - score1;
	});

	return {
		user_ids: sorted_ids
	};
}
export default connect(mapStateToProps)(LeaderBoardPage);