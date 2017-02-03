
import React from 'react'
import { Link } from 'react-router'

export default class App extends React.Component {
  render() {
    return (<div>
    	<h1> RTFM</h1>
    	<ul role = "nav">
    		<li id="start"><Link to="/start">Start</Link></li>
    		</ul>
    		</div>
    		)
  }
}
				