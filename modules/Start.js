import React from 'react'
import { Link } from 'react-router'

export default class Start extends React.Component {
	render() {

		return (
			<div>
			<p>Temporary text!</p>
			<a href="/modules/manual.pdf" download="manual.pdf">Download Manual</a>
			<p>More temporary text!</p>
			<Link to="/play">Play</Link>
			</div>
		)

	}
}