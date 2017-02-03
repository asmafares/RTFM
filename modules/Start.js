import React from 'react'
import { Link } from 'react-router'

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateScreen = this.updateScreen.bind(this);
  }

  updateScreen() {
    var textList = ["Congratulations!",
                    "You have successfully completed: SPACESHIP PILOT EXAM: LEVEL 2.",
                    "This earns you the rank of SPACESHIP NEWBIE and authorizes you to apply for the following positions: SPACE GARBAGE COLLECTOR.",
                    "You may now attempt SPACESHIP PILOT EXAM: LEVEL 3.",
                    "The next administration of this exam will take place in PLANET GGJ TESTING CENTER on JANUARY 25 2255.",
                    "This test will consist of: MANUAL ENGINE FAILURE DIAGNOSIS with a time limit of 10 MINUTES and NO MANUAL OR SUPPLEMENTARY MATERIAL.",
                    "Good luck!"]
      var currentNumber = this.state.currentNumber;

    if(currentNumber < textList.length-1){
        currentNumber++;
        this.setState({
          text : textList[currentNumber],
          currentNumber : currentNumber
        });
    }
  }

	render() {
		//TODO: More precise implementation- add a paragraph at a time, and a blinking cursor.
		return (
			<div id="start">
			<p>You're not quite sure how you got to this point, but you're pretty sure it's someone at Mission Control's fault. </p>
			<p>Well, they can’t help you now. As long as you can pilot your way to safety in the next few minutes, you'll survive. Just don’t let the faint smell of smoke panic you.</p>
			<p>Sure, you’ve been forced into manual mode, which you haven’t used since you were a lowly flight student, but that just means you’ll have to RTFM.</p>
			<a href="/manual.pdf" download="SpaceshipOperatingSystemManual_SupplementaryMaterials.pdf">Download Manual</a>
			<p>(You'll need it!)</p>
			<p>But...</p>
			<p>Wait...</p>
			<p><i>Where's the rest of it?</i></p>
			<Link to="/play">Play</Link>
			</div>
		)

	}
}
