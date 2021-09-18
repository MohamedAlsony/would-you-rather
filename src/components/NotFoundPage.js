import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
	return (
		<Fragment>
			<h2>404 ERROR</h2>
			<h1 className="display4 text-center"> Return to <Link to="/">Home Page</Link></h1>
		</Fragment>
	);
}
export default NotFoundPage;
