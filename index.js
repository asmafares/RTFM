import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import Start from './modules/Start'
import Play from './modules/Play'

render((<Router history={hashHistory}>
 <Route path="/" component={App} />
 <Route path="/start" component={Start}/>
 <Route path="/play" component={Play}/>
  </Router>), document.getElementById('app'))
