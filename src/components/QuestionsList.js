import Questions from './Questions'
import React, { Fragment } from 'react'


function QuestionsList(props) {
	const { emptyListNote,idsList  } = props

	return (
		<Fragment>
			<h2  className="text-center my-3"> <pre>Would You Rather!</pre> </h2>
			{ idsList.length ? (
				idsList.map((x) => <Questions key={x} id={x} />)
			) : ( <p className="text-center">{ emptyListNote }</p>
			)}</Fragment>
	);
}
export default QuestionsList;
