import React from 'react'
import { Link } from 'react-router'

export default class Start extends React.Component {
	render() {
		//TODO: More precise implementation- add a paragraph at a time, and a blinking cursor. Actually set font sizes instead of being lazy and using headers
		return (
			<div>
			<h3>You're not quite sure how you got to this point, but you're pretty sure it's someone at Mission Control's fault. </h3>
			<h3>Well, they can’t help you now. As long as you can pilot your way to safety in the next few minutes, you'll survive. Just don’t let the faint smell of smoke panic you.</h3>
			<h3>Sure, you’ve been forced into manual mode, which you haven’t used since you were a lowly flight student, but that just means you’ll have to RTFM.</h3>
			<a href="/modules/manual.pdf" download="manual.pdf">Download Manual</a>
			<h6>(You'll need it!)</h6>
			<h3>But... wait... <i>where's the rest of it?</i></h3>
			<Link to="/play">Play</Link>
			</div>
		)

	}
}