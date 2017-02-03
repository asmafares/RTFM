import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './modules/App'
import Start from './modules/Start'
import Play from './modules/Play'
import End from './modules/End'
import CommandParser from './modules/CommandParser'


render((<Router history={browserHistory}>
 <Route path="/" component={App} />
 <Route path="/start" component={Start}/>
 <Route path="/play" component={Play}/>
 <Route path="/end" component={End}/>
  </Router>), document.getElementById('app'))
