import React, { Component } from 'react'

import Home from './pages/Home'

import Demo from './pages/Demo'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import {
  Container,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react'


export default class App extends Component {
  render() {

    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/demo" component={Demo}/>
          </div>
        </Router>
      </div>
    )
  }
}
