import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Canvas from './Canvas'
import Nav from './Nav'

const App = () => (
  <Router>
    <div className='app-container'>

      <Route path="/" component={Nav} />
      <Route exact path="/canvas" component={Canvas} />
    </div>
  </Router>
)

export default App
