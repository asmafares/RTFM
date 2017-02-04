import React from 'react'
import { Link } from 'react-router'

export default class Start extends React.Component {

    //TODO: Trigger new paragraphs w/ click; add blinking cursor
    //TODO: Style links
	render() {
		return (
			<div id="start">
			<p>You're not quite sure how you got to this point, but you're pretty sure it's someone at Mission Control's fault. </p>
			<p>Well, they can’t help you now. As long as you can pilot your way to safety in the next few minutes, you'll survive. Just don’t let the faint smell of smoke panic you.</p>
			<p>Sure, you’ve been forced into manual mode, which you haven’t used since you were a lowly flight student, but that just means you’ll have to RTFM.</p>
			<a href="http://www.cs.utexas.edu/~asma/manual.pdf" download>Download Manual</a>
			<p>(You'll need it!)</p>
			<p>But...</p>
			<p>Wait...</p>
			<p><i>Where's the rest of it?</i></p>
			<Link to="/play">Play</Link>
			</div>
		)

	}
}
